const express= require('express')
const router = express.Router()

const { 
    updateUser,
    deleteUser,
    getAllUser,
    getIdUser
} = require('../Controllers/User')
const {verifyToken, verifyUser, verifyAdmin }= require('../VerifyToken/VerifyToken')





// router.get("/checkAuthentication" , verifyToken, getAllUser )

// router.get("/checkUser/:id" , verifyUser,  getIdUser)
// router.get("/checkAdmin/:id" , verifyAdmin,  getIdUser)




router.get('/:id', verifyUser, getIdUser)
router.get("/",  verifyAdmin,  getAllUser)
router.put("/:id" , verifyUser, updateUser )

router.delete("/:id" , verifyUser, deleteUser)




module.exports = router