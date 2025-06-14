// basic imports
const express = require("express");
const router = express.Router();

// controller import
const { getTopCrypto } = require("../Controllers/cryptoController");
const tokenHandler = require("../Middleware/tokenHandler");

// routes

// Routes :- /SuPaPP/crypto/top
router.get("/top", tokenHandler, getTopCrypto);
router.get("/:id/price", () => {});
router.get("/:id/history", () => {});
router.get("/search/:query", () => {});

module.exports = router;
