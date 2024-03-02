const express= require('express')
const router = express.Router()

const {
    createRooms,
    updateRooms,
    getAllRooms,
    getIdRooms,
    deleteRooms
} = require('../Controllers/Rooms');
const {verifyToken, verifyUser, verifyAdmin }= require('../VerifyToken/VerifyToken');


router.post("/" , verifyAdmin, createRooms )

router.put("/:id", verifyAdmin,  updateRooms )


router.get("/" , getAllRooms)




router.get("/:id" ,  getIdRooms)


router.delete("/:id" , verifyAdmin,  deleteRooms)





module.exports = router