const express = require('express')
const Product = require("../Model/AdminProduct").Product;


const createProduct = async (req, res) => {
    try {
        const mahsulotlar = req.body;
        if (!mahsulotlar) {
            res.status(400).send(`Product qo'shilmadi`);
        } else {
            const SaveUser = await Product.create(mahsulotlar);
            res.status(201).json(SaveUser);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
    }
};

const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        if (!id) {
            res.status(400).json(`Bu mahsulotlar topilmadi`);
        } else {
            const updateUser = await Product.findByIdAndUpdate(id, req.body);
            res.status(200).json(updateUser);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
    }
};

const getAllProduct = async (req, res) => {
    try {
        const getAllUser = await Product.find();
        if (!getAllUser) {
            res.status(400).json(`Bu mahsulotlar topilmadi`);
        } else {
            res.status(200).json(getAllUser);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
    }
};

const getIdProduct = async (req, res) => {
    try {
        const getUser = await Product.findById(req.params.id);
        if (!getUser) {
            res.status(400).json(`Bu Product topilmadi`);
        } else {
            res.status(200).json(getUser);
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
    }
};

const deleteUser = async (req, res) => {
    try {
        const deleteuser = await Product.findByIdAndDelete(req.params.id);
        res.status(200).json(`O'chirildi`);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
    }
};

module.exports = {
    updateProduct,
    getAllProduct,
    getIdProduct,
    deleteUser,
    createProduct
};
