const express= require('express')
const router = express.Router()
const {
    ProductsPerson
} = require('../Controllers/userProduct');


router.post("/purchaseId" ,  ProductsPerson )





module.exports = router