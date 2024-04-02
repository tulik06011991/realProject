const express = require('express');
const router = express.Router();
const {  AdminProduct } = require('../Controllers/AdminPanel'); // Funksiyalar olib kelish
const { verifyAdmin } = require('../VerifyToken/VerifyToken');


// router.post("/adminProducts", verifyAdmin, adminProduct); // Post ro'yxati

router.post('/admin', verifyAdmin,  AdminProduct) // Get ro'yxati

module.exports = router;
