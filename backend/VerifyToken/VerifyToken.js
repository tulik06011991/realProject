const jwt = require('jsonwebtoken')


const verifyToken = async(req, res, next)  => {
    const token = req.cookies.access.token;
    if(!token) {
        return res.status(401).json(`Siz ro'yxatdan o'tmagansiz yo'q`)

    }
    jwt.verify(token, process.env.JWT_SECRET, (error, user) =>{
        if(error) {
            return res.status(403).json(`xato token yubordingiz`)

        }
        else{
            req.user = user,
            next()
        }

    } )
    

}

module.exports = verifyToken
