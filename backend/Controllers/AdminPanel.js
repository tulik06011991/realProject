const { Product } = require('../Model/AdminProduct');
const { UserProduct } = require('../Model/UserProducts');

const AdminProduct = async (req, res) => {
  try {
    const { name, price } = req.body;
    const product = new Product({ name, price });
    await product.save();
    res.status(201).send(`Mahsulot muvaffaqiyatli qo'shildi:${product}`);
  } catch (error) {
    console.error('Xatolik:', error);
    res.status(500).send('Server xatosi');
  }
};



module.exports = { AdminProduct };
