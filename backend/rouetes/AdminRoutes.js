const express = require('express');
const router = express.Router();// Funksiyalar olib kelish
const { verifyAdmin, verifyUser } = require('../VerifyToken/VerifyToken');
const { updateProduct,
    getAllProduct,
    getIdProduct,
    deleteUser,
    createProduct} = require('../Controllers/adminController');




    router.post('/productPost', verifyAdmin, createProduct )
    router.get('/productGet',  verifyAdmin, getAllProduct )
    router.get('/productGetId', verifyUser, getIdProduct )
    router.put('/productUpdate',verifyAdmin, updateProduct )
    router.delete('/productDelete', verifyAdmin, deleteUser )


module.exports = router;
