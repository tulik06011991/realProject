const User = require('../Model/Users');
const Product = require('../Model/AdminProduct');
const Userproducts = require('../Model/UserProducts');

const ProductsPerson = async (req, res) => {
    const { userId, productId } = req.params;

    try {
        const user = await User.findById(userId);
        const product = await Product.findById(productId);

        if (!user || !product) {
            return res.status(404).send('Foydalanuvchi yoki mahsulot topilmadi');
        }

        const purchaseDate = new Date();
        const email = user.email;
        const name = user.name;

        user.purchasedProducts.push({ product: product._id, purchaseDate });
        await user.save();

        const purchasedCount = user.purchasedProducts.length;

        const data = {
            email,
            name,
            mahsulot: product._id,
            purchasedCount
        };

        const newData = await Userproducts.create(data);
        res.send(`Mahsulot sotib olindi. Sizning umumiy sotib olishlar soningiz: ${newData}`);
    } catch (error) {
        console.error('Error purchasing product:', error);
        res.status(500).send('Server xatosi');
    }
};

;



  module.exports = {
    ProductsPerson
    
  }