const mongoose = require("mongoose")
const Product = require("../models/ProductModels");

const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.json({ message: error });
    }
}

const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.json(product);
    } catch (error) {
        res.json({ message: error });
    }
}

const createProduct = async (req, res) => {
    const product = new Product({
        name: req.body.name,
        price: req.body.price,
        category: req.body.category,
        quantity: req.body.quantity
    });

    try {
        const savedProduct = await product.save();
        res.json(savedProduct);
    } catch (error) {
        res.json({ message: error });
    }
}

const updateProduct = async (req, res) => {
    try {
        const updatedProduct = await Product.updateOne({ _id: req.params.id }, {
            $set: {
                name: req.body.name,
                price: req.body.price,
                category: req.body.category,
                quantity: req.body.quantity
            }
        });
        res.json(updatedProduct);
    } catch (error) {
        res.json({ message: error });
    }
}

const deleteProduct = async (req, res) => {
    try {
        const removedProduct = await Product.remove({ _id: req.params.id });
        res.json(removedProduct);
    } catch (error) {
        res.json({ message: error });
    }
}

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
}
















