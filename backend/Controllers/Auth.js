const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthModel = require('../Model/Auth');

const registerUser = async (req, res) => {
    try {
        const isEmpty = Object.values(req.body).some(item => !item);
        if (isEmpty) {
            return res.status(400).json(`Siz hamma bo'sh joylarni to'ldirmadingiz`);
        }
        
        const isUser = await AuthModel.findOne({ username: req.body.username });
        if (isUser) {
            return res.status(401).json(`Bu foydalanuvchi ro'yxatdan o'tgan`);
        }

        const hashPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = await AuthModel.create({ ...req.body, password: hashPassword });

        const payload = { id: newUser._id, username: newUser.username };
        const token = jwt.sign(payload, process.env.JWT);

        const { password, ...others } = newUser._doc;
        
        res.status(201).json({ token, ...others }); // Foydalanuvchi muvaffaqiyatli qo'shildi

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const loginUser = async (req, res) => {
    try {
        const isEmpty = Object.values(req.body).some(item => !item);
        if (isEmpty) {
            return res.status(400).json(`Siz hamma bo'sh joylarni to'ldirmadingiz`);
        }
        
        const user = await AuthModel.findOne({ username: req.body.username });
        if (!user) {
            return res.status(401).json(`Login yoki parol xato`);
        }

        const isPassword = await bcrypt.compare(req.body.password, user.password);

        if (!isPassword) {
            return res.status(401).json(`Login yoki parol xato`);
        }

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET);

        const { password, isAdmin, ...others } = user._doc;
        
        res.cookie('access_token', token, {
            httpOnly: true,
        }).status(200).json({ ...others }); // Foydalanuvchi muvaffaqiyatli kirish qildi

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { registerUser, loginUser };
