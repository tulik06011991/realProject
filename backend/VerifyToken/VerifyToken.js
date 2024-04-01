const jwt = require('jsonwebtoken');






const verifyToken = (req, res, next) => {
    const token = req.headers.access_token || req.cookies.access_token;
    
    if (!token) {
        return res.status(401).json(`Siz ro'yxatdan o'tmagansiz yo'q`);

    }
    jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
        if (error) {
            return res.status(403).json(`xato token yubordingiz`);
        }
        req.user = user;
        next();
    });
};




const verifyUser = async (req, res, next) => {
    try {
        verifyToken(req, res, () => {
            if (req.user.id === req.params.id || req.user.isAdmin) {
                next();
            } else {
                return res.status(403).json({ message: "Siz avtorizatsiayadan o'tmagansiz" });
            }
        });
    } catch (error) {
        console.error('verifyUser error:', error);
        return res.status(500).json({ message: "Server xatosi" });
    }
};

const verifyAdmin = (req, res, next, ) => {
    try {
        verifyToken(req, res,  () => {
            if (req.user.isAdmin) {
                next();
            } else {
                console.log(req.user.isAdmin);
                return res.status(400).json(`bomadi`)
                // if(req.user.isAdmin){
                //     console.log(`true`)
                // }
                // else{
                //     console.log(req.user.isAdmin)
                // }
               
               
            }
        });
    } catch (error) {
        console.error('verifyAdmin error:', error);
        return res.status(500).json({ message: "Server xatosi" });
    }
}







module.exports = {
    verifyToken,
    verifyUser,
    verifyAdmin
}
