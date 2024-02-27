const AuthModel = require('../Model/Auth');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const bcrypt = require('bcrypt');
const AuthModel = require('./AuthModel'); // AuthModelni qo'shing yoki avvaldan yaratgan bo'lsangiz uni chaqiring

const registerUser = async (req, res) => {
    try {
        const isEmpty = await Object.values(req.body).some((item) => item === !item);
        if (isEmpty) {
            return res.status(400).json(`siz hamma bo'sh joylarni to'ldirmadingiz`);
        }
        
        const isUser = await AuthModel.findOne({ username: req.body.username });
        if (isUser) {
            return res.status(401).json(`Bu foydalanuvchi ro'yxatdan o'tgan`);
        }

        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await AuthModel.create({ ...req.body, password: hashPassword });

        const payload = ({id:newUser._id, username: newUser.username})

        const token = jwt.sign(payload, process.env.JWT )

        const {password, ...others} = newUser._doc
        
        res.status(201).json(token, others); // Foydalanuvchi muvaffaqiyatli qo'shildi

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const LoginUser = async (req, res) => {
    try {
        const isEmpty = await Object.values(req.body).some((item) => item === !item);
        if (isEmpty) {
            return res.status(400).json(`siz hamma bo'sh joylarni to'ldirmadingiz`);
        }
        
        const isUser = await AuthModel.findOne({ username: req.body.username });
        if (isUser) {
            return res.status(401).json(`Bu foydalanuvchi ro'yxatdan o'tgan`);
        }

        const hashPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = await AuthModel.create({ ...req.body, password: hashPassword });

        const payload = ({id:newUser._id, username: newUser.username})

        const token = jwt.sign(payload, process.env.JWT )

        const {password, ...others} = newUser._doc
        
        res.status(201).json(token, others); // Foydalanuvchi muvaffaqiyatli qo'shildi

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Foydalanuvchi kiritish

module.exports = { registerUser, loginUser }
