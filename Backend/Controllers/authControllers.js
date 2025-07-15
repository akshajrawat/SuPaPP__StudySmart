// Basic imports
const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const Otp = require("../Models/otpVerificationModel");
const bcrypt = require("bcrypt");
const sendOtp = require("../Utils/sendOtp");
const sendEmail = require("../Utils/sendEmail");
const { generateToken } = require("../Utils/tokenGenerator");
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_AUTH_CLIENT_ID);

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

  // Clean up previous unverified OTP entry
  await Otp.deleteOne({ email });

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
  const newUser = await Otp.create({
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
    message: "OTP sent successfully",
    user: {
      username: newUser.username,
      email: newUser.email,
    },
  });
});

// title: Register user
// Path: /SuPaPP/auth/register
// Access: @PUBLIC
const googleAuth = asyncHandler(async (req, res) => {
  const { credential } = req.body;

  const ticket = await client.verifyIdToken({
    idToken: credential,
    audience: process.env.GOOGLE_AUTH_CLIENT_ID,
  });

  const payload = ticket.getPayload();
  const { email, name } = payload;

  let user = await User.findOne({ email });

  if (!user) {
    user = await User.create({
      username: name,
      email,
      password: null, // Optional: mark this as Google-auth
      authProvider: "google",
      isVerified: true,
    });
  }

  if (user.authProvider === "manual") {
    res.status(400);
    throw new Error("Account already exist. Please use password.");
  }

  const token = generateToken({
    id: user._id,
    username: user.username,
    email: email,
    role: user.role,
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only true in production
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
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
  const token = generateToken({
    id: user._id,
    username: user.username,
    email: email,
    role: user.role,
  });

  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only true in production
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
  });

  // send response
  res.status(200).json({
    message: "Login Sucessfull",
    user: {
      id: user._id,
      username: user.username,
      email: email,
      role: user.role,
      profilePhoto: user.profilePhoto,
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
  const user = await Otp.findOne({ email });
  if (!user) {
    res.status(400);
    throw new Error("No account exist from this email");
  }

  // Extracting otp info from user
  const otpInfo = user.otp;

  // Check if the otp is expired
  if (Date.now() > otpInfo.expiresAt) {
    // Clean up the OTP record
    await Otp.deleteOne({ email });
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
  const newUser = await User.create({
    username: user.username,
    email: user.email,
    password: user.password,
    isVerified: true,
  });

  // Clean up the OTP record
  await Otp.deleteOne({ email });

  // generate token
  const token = generateToken({
    id: newUser._id,
    username: newUser.username,
    email: email,
    role: newUser.role,
  });
  res.cookie("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production", // only true in production
    sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
  });
  res.status(200).json({ message: "OTP verified sucessfully", user: user });
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

// title: Verify Token
// Path: /SuPaPP/auth/verify-token
// Access: @PRIVATE
const verifyToken = asyncHandler(async (req, res) => {
  res.status(200).json(req.user);
});

// title: GET USERS
// Path: /SuPaPP/auth/users
// Access: @PRIVATE
const getUsers = asyncHandler(async (req, res) => {
  console.log("received body is :-", req.body);

  const currUserId = req.user.id;

  const filteredUsers = await User.find({ _id: { $ne: currUserId } }).select(
    "-password"
  );

  res.status(200).json({ filteredUsers });
});

module.exports = {
  registerUser,
  loginUser,
  verifyOtp,
  contactMe,
  verifyToken,
  getUsers,
  googleAuth,
};
