const Product = require('../models/product.model');

const getProducts = async (req, res, next) => {
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        next(error);
        
    }
}

const getProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.set('Access-Control-Allow-Origin', '*');
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
};

const createProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch (error) {
        next(error);
    }
}

const updateProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product) {
            return res.status(404).json({message: 'Product not found'});
        }

        // be sure to find the updated product
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
        
    } catch (error) {
        next(error);
    }
};

const deleteProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findByIdAndDelete(id);

        if(!product) {
            return res.status(404).json({message: 'Product not found'});
        }

        res.status(200).json({message: `Product ${id} deleted successfully`});

    } catch (error) {
        next(error);
    }
}

module.exports = {
    getProducts, 
    getProduct, 
    createProduct, 
    updateProduct, 
    deleteProduct
}