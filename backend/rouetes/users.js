const express= require('express')
const router = express.Router()

const { 
    updateUser,
    deleteUser,
    getAllUser,
    getIdUser
} = require('../Controllers/User')
const {verifyToken, verifyUser, verifyAdmin }= require('../VerifyToken/VerifyToken')





router.get("/checkAuthentication" , verifyToken, getAllUser )

router.get("/checkUser/:id" , verifyUser,  getIdUser)
router.get("/checkAdmin/:id" , verifyAdmin,  getIdUser)

router.put("/:id" , updateUser )


router.delete("/:id" ,  deleteUser)




module.exports = router