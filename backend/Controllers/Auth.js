
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const AuthModel = require('../Model/Users');

const registerUser = async (req, res) => {
    try {
        const isEmpty = Object.values(req.body).some(item => !item);
        if (isEmpty) {
            return res.status(400).json({ message: "Siz hamma bo'sh joylarni to'ldirmadingiz" });
        }
        
        const isUser = await AuthModel.findOne({ username: req.body.username });
        if (isUser) {
            return res.status(401).json({ message: "Bu foydalanuvchi avval ro'yxatdan o'tgan" });
        }

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const newUser = await AuthModel.create({ ...req.body, password: hashedPassword });

        const payload = { id: newUser._id, username: newUser.username };
        const token = jwt.sign(payload, process.env.JWT_SECRET);

        const { password, ...others } = newUser._doc;
        
        return res.status(201).json({others}); // Foydalanuvchi muvaffaqiyatli qo'shildi

    } catch (error) {
        console.error('Registration error:', error);
        return res.status(500).json({ message: "Server xatosi" });
    }
};

const loginUser = async (req, res) => {
    try {
        const isEmpty = Object.values(req.body).some(item => !item);
        if (isEmpty) {
            return res.status(400).json({ message: "Siz hamma bo'sh joylarni to'ldirmadingiz" });
        }
        
        const user = await AuthModel.findOne({ email: req.body.email });
        if (!user) {
            return res.status(401).json({ message: "Login yoki parol xato" });
        }

        const isPassword = await bcrypt.compare(req.body.password, user.password);

        if (!isPassword) {
            return res.status(401).json({ message: "Login yoki parol xato" });
        }

        const payload = { id: user._id, isAdmin: user.isAdmin };
        const token = jwt.sign(payload, process.env.JWT_SECRET);

        // Set token as a cookie
        res.cookie('access_token', token, {
            httpOnly: true,
            // secure: true, // Uncomment this line in production (for HTTPS)
            // sameSite: 'None', // Uncomment this line in production (for cross-site requests)
        });

        const { password, isAdmin, ...others } = user._doc;
        return res.status(200).json({ token, ...others }); // Foydalanuvchi muvaffaqiyatli kirish qildi

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ message: "Server xatosi" });
    }
};

module.exports = { registerUser, loginUser };
