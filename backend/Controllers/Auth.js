<<<<<<< HEAD
const register = async(req, res) =>{
    try {
        
    } catch (error) {
        
    }

}


const login = async(req, res) =>{
    try {
        
    } catch (error) {
        
    }
    
}

module.exports = {
    register,
    login
}
=======
const AuthModel = require('../Model/Auth');

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

module.exports = { registerUser, loginUser };
>>>>>>> 22e7df7a7808cc9f088f1dd17b1d7ee39092fa51
