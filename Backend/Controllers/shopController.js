// basic imports
const asyncHandler = require("express-async-handler");
const axios = require("axios");
// controllers

// title: Send user message
// Path: /SuPaPP/shop/products
// Access: @PRIVATE
const getProducts = asyncHandler(async (req, res) => {
  const response = await axios.get("https://dummyjson.com/products?limit=100");
  res.status(200).json(response.data);
});

// exports
module.exports = {
  getProducts,
};
