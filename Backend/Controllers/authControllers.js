// Basic imports
const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sendOtp = require("../Utils/sendOtp");

// Controllers

// title: Register user
// Path: /SuPaPP/auth/register
// Access: @PUBLIC
const registerUser = asyncHandler(async (req, res) => {
  console.log("Received body", req.body);
  // destructure the userbody and get all the info
  const { username, email, password } = req.body;

  // check whether all the info is present or not
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  // User Already Exist???
  const userExist = await User.findOne({ email });
  if (userExist) {
    res.status(400);
    throw new Error("User already exist");
  }

  // hashing of password using bycript
  const hashedPassword = await bcrypt.hash(password, 10);

  // OTP logic and hashing
  const otp = await sendOtp(email);
  if (!otp) {
    res.status(500);
    throw new Error("Something went wrong while sending otp");
  }
  const hashedOtp = await bcrypt.hash(otp, 10);
  const expiresAt = new Date(Date.now() + 5 * 60 * 1000);

  // create new user
  const newUser = await User.create({
    username,
    email,
    password: hashedPassword,
    otp: {
      code: hashedOtp,
      expiresAt,
    },
  });

  // Send the details
  res.status(201).json({
    username: newUser.username,
    email: newUser.email,
  });
});

// title: Login user
// Path: /SuPaPP/auth/login
// Access: @PUBLIC
const loginUser = asyncHandler(async () => {});

module.exports = {
  registerUser,
  loginUser,
};
