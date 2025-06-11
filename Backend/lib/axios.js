const axios = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    "x-cg-demo-api-key": process.env.COIN_GEKKO_KEY,
  },
});

module.exports = axiosInstance;
