const express = require('express')
const app  = express()
require('dotenv').config()


app.listen(8800, () =>{
    console.log(`server to connected`)
})
