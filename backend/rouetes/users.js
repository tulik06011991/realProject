const express= require('express')
const router = express.Router()

const { 
    updateUser,
    deleteUser,
    getAllUser,
    getIdUser
} = require('../Controllers/User')
const verifyToken = require('../VerifyToken/VerifyToken')





router.get("/token" , verifyToken, getAllUser )

router.get("/" ,  getIdUser)

router.put("/" , updateUser )


router.delete("/" ,  deleteUser)




module.exports = router