const Product = require("../Model/Mahsulotlar").Product;
const UserData= require("../Model/Users");
const UserProducts = require("../Model/UserProducts")


const UserPurchase = async (req, res) => {
    try {
        const { UserId, ProductIds } = req.body; // ProductIds nomli massiv

        const user = await UserData.findOne(UserId);

        if (!user) {
            res.status(400).send(`Foydalanuvchi topilmadi`);
            return; // Agar foydalanuvchi topilmagan bo'lsa, funksiyani to'xtatamiz
        }

        const daqiqa = Date.now();

        const email = user.email;
        const name = user.username;

        // Mahsulotlar ro'yxati
        const products = await Promise.all(ProductIds.map(async (ProductId) => {
            const product = await Product.findOne(ProductId);
            return {
                name: product.name,
                price: product.price
            };
        }));

        const Data = await Promise.all(products.map(async (product) => {
            return await UserProducts.create({ user: email, product: product.name, price: product.price, purchaseDate: daqiqa });
        }));

        res.status(201).json(Data);

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
    }
};

const UserGetProduct = async(req, res) =>{
    try {
        const {UserId, ProductId} = req.body;

        const user = await UserData.findOne(UserId);
        const product = await Product.findOne(ProductId)

        if(!user || !product ){
            res.status(400).send(`malumot topilmadi`)
        };
        const daqiqa = Date.now()


        const Data = await Product.find();
        res.status(201).json({Data, daqiqa})

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
        
    }
}

module.exports = {
    UserPurchase,
    UserGetProduct
}