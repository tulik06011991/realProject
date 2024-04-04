const expres = require('express')
const mahsulotlar = require('../Model/Mahsulotlar')

// joylamoq 

const postMahsulot = async(req, res) =>{
    try {
        const mahsulot = req.body
        if(!mahsulot){
            res.status(400).json(` mahsulotlar yuklanmadi`)
        };
        const postProduct = await mahsulotlar.create(mahsulot);
        res.status(201).json(postProduct)
        
    } catch (error) {
        console.log(error),
        res.status(500).json({msg: error})
        
    }
};
const getMahsulot = async(req, res) =>{
    try {
        const mahsulotlarRoyxati  = mahsulotlar.find();
        if(!mahsulotlarRoyxati){
            res.status(400).json(` mahsulotlar topilmadi`)
        };
        res.status(200).json(mahsulotlarRoyxati)
        
    } catch (error) {
        console.log(error),
        res.status(500).json({msg: error})
        
    }
};
const getIdMahsulot = async(req, res) =>{
    try {
        const id = req.params
        const getId = mahsulotlar.findById(id);
        if(!getId){
            res.status(400).json(` mahsulot topilmadi`)
        };
        res.status(200).json(getId)
        
    } catch (error) {
        console.log(error),
        res.status(500).json({msg: error})
    }
};
const getIdDelete = async(req, res) =>{
    try {
        const id = req.params
        const getId = mahsulotlar.findByIdAndDelete(id);
        if(!getId){
            res.status(400).json(` mahsulot topilmadi`)
        };
        res.status(200).json(` mahsulot o'chirildi`)
        
    } catch (error) {
        console.log(error),
        res.status(500).json({msg: error})
    }
}

module.exports = {
    getMahsulot,
    getIdDelete,
    getIdMahsulot,
    postMahsulot
}