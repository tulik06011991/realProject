const express= require('express')
const router = express.Router()
const {
    ProductsPerson, ProductGet
} = require('../Controllers/userProduct');


router.post("/purchaseId" ,  ProductsPerson )
router.get('/products', ProductGet )





module.exports = router