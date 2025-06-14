// basic imports
const asyncHandler = require("express-async-handler");
const axiosInstance = require("../lib/axios");

// controllers

// title: get rop 10 crypto
// Path: /SuPaPP/crypto/top
// Access: @PRIVATE
const getTopCrypto = asyncHandler(async (req, res) => {
  const response = await axiosInstance.get(
    "/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1"
  );

  res.status(200).json(response.data);
});

module.exports = {
  getTopCrypto,
};
