const express = require('express');
const router = express.Router();
const { verifyAdmin } = require('../VerifyToken/VerifyToken');
const { getMahsulot,
    getIdDelete,
    getIdMahsulot,
    postMahsulot} = require('../Controllers/Mahsulotlar')

 
module.exports = router;
