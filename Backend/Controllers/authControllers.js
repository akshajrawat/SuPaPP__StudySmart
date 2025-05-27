// Basic imports
const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const sendOtp = require("../Utils/sendOtp");
const sendEmail = require("../Utils/sendEmail");

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
const loginUser = asyncHandler(async (req, res) => {
  console.log("Received body :-", req.body);

  // Destructuring
  const { email, password } = req.body;

  // check whether all the info is present or not
  if (!email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  // User Exist???
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("No account exist from this email");
  }

  // Check whether the password is vaild
  const hashedPass = user.password;
  const isMatch = await bcrypt.compare(password, hashedPass);
  if (!isMatch) {
    res.status(401);
    throw new Error("Email or Password is incorrect");
  }

  // Generation of token
  const secret = process.env.JWT_SECERET;
  const payload = {
    username: user.username,
    email,
    role: user.role,
  };
  const Token = jwt.sign(payload, secret, {
    expiresIn: "1h",
  });

  // send response
  res.status(200).json({
    message: "Login Sucessfull",
    Token,
    user: {
      username: user.username,
      email,
      role: user.role,
    },
  });
});

// title: Verify Otp
// Path: /SuPaPP/auth/verify-otp
// Access: @PUBLIC
const verifyOtp = asyncHandler(async (req, res) => {
  console.log("Received body:", req.body);

  // Destructure
  const { email, otp } = req.body;

  // check whether all the info is present or not
  if (!email || !otp) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  // User Exist???
  const user = await User.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("No account exist from this email");
  }

  // Extracting otp info from user
  const otpInfo = user.otp;

  // Check if the otp is expired
  if (Date.now() > otpInfo.expiresAt) {
    res.status(400);
    throw new Error("Otp has been expired.");
  }

  // Check whether otp is correct or not
  const isOtpMatch = await bcrypt.compare(otp, otpInfo.code);
  if (!isOtpMatch) {
    res.status(401);
    throw new Error("OTP is incorrect");
  }

  // sending final msg and modifying user
  user.otp = null;
  user.isVerified = true;
  await user.save();

  res.status(200).json({ message: "OTP verified sucessfully" });
});

// title: Contact Me
// Path: /SuPaPP/auth/contact
// Access: @PUBLIC
const contactMe = asyncHandler(async (req, res) => {
  console.log("Received body:", req.body);

  const { name, email, message } = req.body;

  // check whether all the info is present or not
  if (!email || !name || !message) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  await sendEmail({
    from: email,
    subject: `New contact message from ${name}`,
    text: message,
    contact: true,
  });

  // send response
  res.status(200).json({ message: "Your message has been sent succesfully" });
});

module.exports = {
  registerUser,
  loginUser,
  verifyOtp,
  contactMe,
};
