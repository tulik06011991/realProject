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


const verifyUser = async(req, res, next) =>{
    verifyToken(req, res, next, () =>{
        if(req.user.id === req.params.id || req.user.isAdmin ){
            next()
        }
        else{
            res.status(403).json({message: `Siz avtorizatsiayadan o'tmagansiz`})
        }
    })

}

module.exports = {
verifyToken,
verifyUser
}
