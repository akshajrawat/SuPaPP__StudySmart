// basic imports
const asyncHandler = require("express-async-handler");
const axios = require("axios");
// controllers

// title: Get all the products
// Path: /SuPaPP/shop/products
// Access: @PRIVATE
const getProducts = asyncHandler(async (req, res) => {
  const response = await axios.get("https://dummyjson.com/products?limit=100");
  res.status(200).json(response.data);
});

// title: Search a particular product with a word
// Path: /SuPaPP/shop/searchProduct/:search
// Access: @PRIVATE
const searchProducts = asyncHandler(async (req, res) => {
  const { search } = req.params;
  const response = await axios.get(
    `https://dummyjson.com/products/search?q=${encodeURIComponent(search)}`
  );
  res.status(200).json(response.data.products);
});

// title: Search a particular product with a id
// Path: /SuPaPP/shop/product/:id
// Access: @PRIVATE
const getProduct = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const response = await axios.get(
    `https://dummyjson.com/products/${encodeURIComponent(id)}`
  );
  res.status(200).json(response.data);
});

// exports
module.exports = {
  getProducts,
  searchProducts,
  getProduct,
};
