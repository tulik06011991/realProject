const express= require('express')
const router = express.Router()

const purchaseController = require('../Controllers/userController');

router.post('/purchase', purchaseController. UserPurchase);

module.exports = router