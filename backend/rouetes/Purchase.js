const express= require('express')
const router = express.Router();
const { verifyUser } = require('../VerifyToken/VerifyToken');

const {UserPurchase, UserGetProduct}= require('../Controllers/userController');

router.post('/purchase/:id', verifyUser, UserPurchase);
router.get('/getPurchase/:id', verifyUser,   UserGetProduct );


module.exports = router