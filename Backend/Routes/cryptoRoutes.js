// basic imports
const express = require("express");
const router = express.Router();

// controller import
const { getTopCrypto } = require("../Controllers/cryptoController");

// routes
router.get("/top", getTopCrypto);
router.get("/:id/price", () => {});
router.get("/:id/history", () => {});
router.get("/search/:query", () => {});

module.exports = router;
