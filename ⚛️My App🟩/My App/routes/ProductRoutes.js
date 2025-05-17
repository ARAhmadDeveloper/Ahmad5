const {getProducts, getProductById, createProduct, updateProduct, deleteProduct} = require("../controllers/ProductController");
const express = require("express");
const ProductRouter = express.Router();

ProductRouter.get("/products", getProducts);
ProductRouter.get("/products/:id", getProductById);
ProductRouter.post("/products/create", createProduct);
ProductRouter.put("/products/:id", updateProduct);
ProductRouter.delete("/products/:id", deleteProduct);

module.exports = ProductRouter;