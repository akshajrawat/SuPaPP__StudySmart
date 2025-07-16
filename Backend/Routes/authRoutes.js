// Baic setup

const express = require("express");
const router = express.Router();

// Controllers
const {
  registerUser,
  loginUser,
  verifyOtp,
  contactMe,
  verifyToken,
  getUsers,
  googleAuth,
} = require("../Controllers/authControllers");
const tokenHandler = require("../Middleware/tokenHandler");

// routes

// Path :- /SuPaPP/auth/register
router.post("/register", registerUser);

// Path :- /SuPaPP/auth/login
router.post("/login", loginUser);

// Path :- /SuPaPP/auth/googleAuth
router.post("/googleAuth", googleAuth);

// Path :- /SuPaPP/auth/verify-otp
router.post("/verify-otp", verifyOtp);

// Path :- /SuPaPP/auth/contact
router.post("/contact", contactMe);

// Path :- /SuPaPP/auth/verify-token
router.get("/verify-token", tokenHandler, verifyToken);

// Path :- /SuPaPP/auth/users
router.get("/users", tokenHandler, getUsers);

module.exports = router;
