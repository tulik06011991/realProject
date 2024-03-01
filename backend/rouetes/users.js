const express= require('express')
const router = express.Router()

const { 
    updateUser,
    deleteUser,
    getAllUser,
    getIdUser
} = require('../Controllers/User')
const { verifyAdmin}= require('../VerifyToken/VerifyToken')





// router.get("/checkAuthentication" , verifyToken, getAllUser )

// router.get("/checkUser/:id" , verifyUser,  getIdUser)
// router.get("/checkAdmin/:id" , verifyAdmin,  getIdUser)




router.get('/:id', verifyAdmin, getIdUser)
router.get("/",  verifyAdmin,  getAllUser)
router.put("/:id" , verifyAdmin, updateUser )

router.delete("/:id" , verifyAdmin, deleteUser)




module.exports = router