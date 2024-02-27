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
        const isEmpty = await Object.values(req.body).some((item) => item === ' ');
        if (isEmpty) {
            return res.status(400).json(`siz hamma bo'sh joylarni to'ldirmadingiz`);
        }
        
        const user = await AuthModel.findOne({ username: req.body.username });
        if (!user) {
            return res.status(401).json(`login yoki parol xato`);
        }

        const isPassword = await bcrypt.compare(req.body.password, user.password)

        if(!isPassword){
            res.status(401).json(` login yoki parol xato`)
        }
       

        const payload = ({id:newUser._id, isAdmin: newUser.isAdmin})

        const token = jwt.sign(payload)

        const {password, isAdmin, ...others} = newUser._doc
        
        res.status(201).json({ others}); // Foydalanuvchi muvaffaqiyatli qo'shildi

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// Foydalanuvchi kiritish

module.exports = { registerUser, loginUser }
