const Product = require("../Model/Mahsulotlar").Product;
const UserData= require("../Model/Users");
const UserProducts = require("../Model/UserProducts")


const UserPurchase = async(req, res) =>{
    try {
        const {UserId, ProductId} = req.body;

        const user = await UserData.findOne(UserId);
        const product = await Product.findOne(ProductId)

        if(!user || !product ){
            res.status(400).send(`malumot topilmadi`)
        };
        const daqiqa = Date.now()

        const email = user.email;
        const name = user.username;
        const productName = product.name;
        const productPrice = product.price

        const Data = await UserProducts.create({user: email, product: productName, price: productPrice, purchaseDate: daqiqa});
        res.status(201).json(Data)

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error });
        
    }
}

module.exports = {
    UserPurchase
}