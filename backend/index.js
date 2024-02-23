const express = require('express');
const app = express();
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors')



app.use(cors())
app.use(express.json())




mongoose.connect(process.env.MONGO_URL)
.then(() =>{
    console.log(`mongodb atlas connected`)
}).catch((error) =>{
    console.log( error, `mongodb atlas not connected`)
})

mongoose.connection.on('disconnected', () =>{
    console.log(`disconnected`);
});

mongoose.connection.on('connected', () =>{
    console.log(`connected`);
});





const PORT = process.env.PORT || 8800;

app.listen(PORT, () =>{
    console.log(`server connected on port ${PORT}`);
});
