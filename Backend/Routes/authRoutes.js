// Baic setup

const express = require("express");
const router = express.Router();

// Controllers
const { registerUser, loginUser } = require("../Controllers/authControllers");

// routes

// Path :- /SuPaPP/auth/register
router.post("/register", registerUser);

// Path :- /SuPaPP/auth/register
router.post("/login", loginUser);

router.post("/verify-otp", () => {});

router.post("/resend-otp", () => {});

router.post("/profile", () => {});

module.exports = router;
