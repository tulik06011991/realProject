const User = require('../Model/Product')
const Product = require('../Model/Product')





const ProductsPerson =  async (req, res) => {
    const { userId, productId } = req.params;
  
    try {
      const user = await User.findById(userId);
      const product = await Product.findById(productId);
  
      if (!user || !product) {
        return res.status(404).send('Foydalanuvchi yoki mahsulot topilmadi');
      }
  
      // Sotib olingan vaqtni olamiz
      const purchaseDate = new Date();
  
      // Foydalanuvchining mahsulotlarni sotib olinganlar ro'yxatiga qo'shamiz
      user.purchasedProducts.push({ product: product._id, purchaseDate });
      
      // Foydalanuvchi qancha mahsulot sotib olganligini hisoblaymiz
      const purchasedCount = user.purchasedProducts.length;
  
      await user.save();
      res.send(`Mahsulot sotib olindi. Sizning umumiy sotib olishlar soningiz: ${purchasedCount}`);
    } catch (error) {
      console.error('Error purchasing product:', error);
      res.status(500).send('Server xatosi');
    }
  };
  
  const ProductGet = async (req, res) => {
    try {
      const users = await User.find().populate('purchasedProducts.product');
      res.json(users);
    } catch (error) {
      console.error('Error fetching users:', error);
      res.status(500).send('Server xatosi');
    }
  };

  module.exports = {
    ProductsPerson,
    ProductGet
  }