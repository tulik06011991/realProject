const User = require('../Model/Users');
const Product = require('../Model/AdminProduct');
const UserProducts = require('../Model/UserProducts');

const ProductsPerson = async (req, res) => {
    const { userId, productId } = req.body;

    try {
        const user = await User.findById(userId);
        const product = await Product.findById(productId);

        if (!user || !product) {
            return res.status(404).send('Foydalanuvchi yoki mahsulot topilmadi');
        }

        const purchaseDate = new Date();

        const newUserProducts = new UserProducts({
            user: user._id,
            product: product._id,
            purchaseDate: purchaseDate
        });
        await newUserProducts.save();

        res.send('Mahsulot sotib olindi.');
    } catch (error) {
        console.error('Error purchasing product:', error);
        res.status(500).send('Server xatosi');
    }
};

const ProductGet = async (req, res) => {
    try {
        const users = await UserProducts.find().populate('product');
        res.json(users);
    } catch (error) {
        console.error('Ma\'lumotlar olishda xatolik:', error);
        res.status(500).send('Server xatosi');
    }
};

module.exports = {
    ProductsPerson,
    ProductGet
};
