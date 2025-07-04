// Basic setup
const express = require("express");
const router = express.Router();

// controllers import
const {
  roleUpgradeSeller,
  createStore,
} = require("../Controllers/shopController");
const tokenHandler = require("../Middleware/tokenHandler");
const sellerHandler = require("../Middleware/sellerRoleHandler");

// Path :- /SuPaPP/shop/upgrade-role-seller
router.put(
  "/upgrade-role-seller",
  tokenHandler,
  sellerHandler,
  roleUpgradeSeller
);

// Path :- /SuPaPP/shop/create-store
router.post("/create-store", tokenHandler, sellerHandler, createStore);

module.exports = router;
