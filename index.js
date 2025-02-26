require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route.js");
const errorMiddleware = require("./middleware/error.middleware.js");
const cors = require("cors");

const app = express();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/api/products", productRoute);

app.use(errorMiddleware);

mongoose
.connect(MONGO_URL)
.then(() => {
    console.log("Connected to DB");
    app.listen(PORT, () => {
        console.log("Server is running on port" + PORT);
    });
})
.catch(() => {
    console.log("Connection failed");
});
