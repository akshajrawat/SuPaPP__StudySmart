// basic imports
const express = require("express");
const tokenHandler = require("../Middleware/tokenHandler");
const route = express.Router();

// controller imports
const {
  getProducts,
  searchProducts,
  getProduct,
} = require("../Controllers/shopController");

// /SuPaPP/shop/products/products
route.get("/products", tokenHandler, getProducts);

// /SuPaPP/shop/searchProduct/:search
route.get("/searchProduct/:search", tokenHandler, searchProducts);

// /SuPaPP/shop/product/:id
route.get("/product/:id", tokenHandler, getProduct);

module.exports = route;
