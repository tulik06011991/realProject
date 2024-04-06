const Product = require("../Model/AdminProduct").Product;
const UserData = require("../Model/Users");
const UserProducts = require("../Model/UserProducts");

const UserPurchase = async (req, res) => {
    try {
        const { UserId, ProductIds } = req.body;

        const user = await UserData.findOne(UserId);
        if (!user) {
            return res.status(400).send(`Foydalanuvchi topilmadi`);
        }

        const daqiqa = Date.now();
        const email = user.email;

        const promises = ProductIds.map(async (productId) => {
            const product = await Product.findOne(productId);
            if (!product) {
                return res.status(400).send(`Mahsulot topilmadi`);
            }
            const { name: productName, price: productPrice } = product;

            const data = await UserProducts.create({
                user: email,
                product: productName,
                price: productPrice,
                purchaseDate: daqiqa
            });
            return data;
        });

        const purchasedProducts = await Promise.all(promises);

        res.status(201).json(purchasedProducts);
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
    }
};


const UserGetProduct = async(req, res) =>{
    
}

module.exports = {
    UserPurchase
};
