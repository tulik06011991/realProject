const express = require('express');
const router = express.Router();// Funksiyalar olib kelish
const { verifyAdmin } = require('../VerifyToken/VerifyToken');
const { updateProduct,
    getAllProduct,
    getIdProduct,
    deleteUser,
    createProduct} = require('../Controllers/adminController');




    router.post('/productPost', createProduct )
    router.get('/productGet', getAllProduct )
    router.get('/productGetId', getIdProduct )
    router.put('/productUpdate', updateProduct )
    router.delete('/productDelete', deleteUser )

module.exports = router;
