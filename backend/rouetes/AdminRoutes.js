const express= require('express')
const router = express.Router()
const adminProduct = require('../Controllers/AdminPanel')


const { verifyAdmin }= require('../VerifyToken/VerifyToken');


router.post("/adminProducts" ,  verifyAdmin,  adminProduct )


module.exports = router
