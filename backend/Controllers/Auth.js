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

        const token = jwt.sign({id:newUser._id, username: newUser.username})

        const {}
        
        res.status(201).json(newUser); // Foydalanuvchi muvaffaqiyatli qo'shildi

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = registerUser;

// Foydalanuvchi kiritish
const loginUser = async (req, res) => {
    try {
        // Foydalanuvchi ma'lumotlarini olamiz
        const { username, password } = req.body;

        // Foydalanuvchi tekshiriladi
        const user = await AuthModel.findOne({ username });

        if (!user || user.password !== password) {
            return res.status(401).json({ message: `'Noto'g'ri foydalanuvchi nomi yoki parol'!'` });
        }

        res.status(200).json({ message: 'Foydalanuvchi kirish muvaffaqiyatli!' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerUser, loginUser }
