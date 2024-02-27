const AuthModel = require('../Model/Auth');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

// Foydalanuvchi ro'yxatdan o'tkazish
const registerUser = async (req, res) => {
    try {
        // Foydalanuvchi ma'lumotlarini olamiz
        const { username, email, password } = req.body;

        // Foydalanuvchi ro'yxatdan o'tkaziladi
        const newUser = await AuthModel.create({ username, email, password });

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

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
