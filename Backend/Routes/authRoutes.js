// Baic setup

const express = require("express");
const router = express.Router();

// Controllers
const {
  registerUser,
  loginUser,
  verifyOtp,
  contactMe,
} = require("../Controllers/authControllers");

// routes

// Path :- /SuPaPP/auth/register
router.post("/register", registerUser);

// Path :- /SuPaPP/auth/register
router.post("/login", loginUser);

// Path :- /SuPaPP/auth/verify-otp
router.post("/verify-otp", verifyOtp);

// Path :- /SuPaPP/auth/contact
router.post("/contact", contactMe);

router.post("/resend-otp", () => {});

router.post("/profile", () => {});

module.exports = router;
