const express= require('express')
const router = express.Router()

const {createHotel,
    updateHotel,
    deleteHotel,
    getAllHotel,
    getIdHotel
} = require('../Controllers/Hotel')


router.post("/" , createHotel )

router.put("/:id", updateHotel )

router.get("/" , getAllHotel)





router.get("/:id" ,  getIdHotel)


router.delete("/:id" ,  deleteHotel)




module.exports = router