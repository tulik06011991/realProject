const jwt = require('jsonwebtoken')


const verifyToken = async(req, res)  => {
    const token = req.cookies.access.token;
    if(!token) {
        return res.json(`token yo'q`)

    }
    

}
