const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route.js');
const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/products', productRoute);


mongoose.connect("mongodb+srv://joeaspiazudeveloper:KxNLLEBgnSYlGjdr@backendnodeapi.3g1bf.mongodb.net/?retryWrites=true&w=majority&appName=backendnodeapi")
.then(() => {
    console.log("Connected to DB");
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    })
})
.catch(() => {
    console.log("Connection failed");
})