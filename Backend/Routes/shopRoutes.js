// basic imports
const express = require("express");
const tokenHandler = require("../Middleware/tokenHandler");
const route = express.Router();

// controller imports
const { getProducts } = require("../Controllers/shopController");

route.get("/products", tokenHandler, getProducts);

module.exports = route;
