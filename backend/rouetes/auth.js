const express= require('express')
const router = express.Router()
const register = require('../Controllers/Auth')



router.post("/" , register )

router.post("/" , login )





module.exports = router