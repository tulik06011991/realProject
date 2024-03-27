const express= require('express')
const router = express.Router()

const { 
    updateUser,
    deleteUser,
    getAllUser,
    getIdUser
} = require('../Controllers/User')

const { verifyToken, verifyUser, verifyAdmin} = require('../VerifyToken/VerifyToken')





<<<<<<< HEAD




router.get("/checkAuthentication" , verifyToken, (req,res) =>{
    res.send(`verify token ishladi`)
} )

router.get("/checkUser/:id" , verifyUser, (req,res) =>{
    res.send(`verifyUser ishladi`)
})
router.get("/checkAdmin/:id" , verifyAdmin,  (req,res) =>{
    res.send(`verifyAdmin ishladi`)
})

// router.get("/checkAuthentication" , verifyToken, (req, res, next) =>{
//     res.send('ishladi')
// })
=======
router.get("/checkAuthentication" , verifyToken, (req, res, next) =>{
    res.send('ishladi')
})
>>>>>>> 2ecca0c9f7a545fb98ff1b9d41074cc5fe91e16b

router.get("/checkUser/:id" , verifyUser,  (req, res, next) =>{
    res.send('ishladimmmmmmm')})

router.get("/checkAdmin/:id" , verifyAdmin, (req, res, next) =>{
    res.send('Admin ishladi')} )





router.get('/:id', verifyAdmin, getIdUser)
router.get("/",  verifyAdmin,  getAllUser)
router.put("/:id" , verifyAdmin, updateUser )

router.delete("/:id" , verifyAdmin, deleteUser)




module.exports = router