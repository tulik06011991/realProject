const express = require('express');
const router = express.Router();
const { ProductGet,  AdminProduct } = require('../Controllers/AdminPanel'); // Funksiyalar olib kelish
const { verifyAdmin } = require('../VerifyToken/VerifyToken');


// router.post("/adminProducts", verifyAdmin, adminProduct); // Post ro'yxati
router.get("/productGet", verifyAdmin, ProductGet);
router.post('/admin', verifyAdmin,  AdminProduct) // Get ro'yxati

module.exports = router;
