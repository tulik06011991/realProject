const express= require('express')
const router = express.Router()

const { 
    updateUser,
    deleteUser,
    getAllUser,
    getIdUser
} = require('../Controllers/User')




router.get("/" , getIdUser)

router.get("/" , getAllUser )


router.put("/" , updateUser )


router.delete("/" ,  deleteUser)




module.exports = router