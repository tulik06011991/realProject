const express= require('express')
const router = express.Router()

const { 
    updateUser,
    deleteUser,
    getAllUser,
    getIdUser
} = require('../Controllers/User')
const { verifyToken, verifyUser, verifyAdmin}= require('../VerifyToken/VerifyToken')





// router.get("/checkAuthentication" , verifyToken, (req, res, next) =>{
//     res.send('ishladi')
// })

// router.get("/checkUser/:id" , verifyUser,  (req, res, next) =>{
//     res.send('ishladimmmmmmm')})

router.get("/checkAdmin/:id" , verifyAdmin, (req, res, next) =>{
    res.send('Admin ishladi')} )




router.get('/:id', verifyAdmin, getIdUser)
router.get("/",  verifyAdmin,  getAllUser)
router.put("/:id" , verifyAdmin, updateUser )

router.delete("/:id" , verifyAdmin, deleteUser)




module.exports = router