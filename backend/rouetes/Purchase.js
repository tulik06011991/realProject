const express= require('express')
const router = express.Router()

const {
    ProductGet,
    ProductsPerson
} = require('../Controllers/Product');

const {verifyToken, verifyUser, verifyAdmin }= require('../VerifyToken/VerifyToken');


// foydalanuvchi uchun


router.post("/purchaseId" ,  ProductsPerson )
router.get("/:id" ,  ProductGet)


// ++ Admin panel uchun

//  router.post("/" , verifyAdmin, createRooms )

//  router.put("/:id", verifyAdmin,  updateRooms )


// router.get("/" , getAllRooms)

//  router.delete("/:id" , verifyAdmin,  deleteRooms)





module.exports = router