// basic imports
const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

// middleware
const tokenHandler = asyncHandler(async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return;
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    const userInfo = await User.findOne({ email: verified.email }).select(
      "-password"
    );

    if (!userInfo) {
      res.status(401);
      throw new Error("User does not exist");
    }

    req.user = {
      id: userInfo._id,
      username: userInfo.username,
      email: userInfo.email,
      role: userInfo.role,
      profilePhoto: userInfo.profilePhoto,
    };
    next();
  } catch (error) {
    res.status(401).json({ message: "Invailid or expired token" });
  }
});

module.exports = tokenHandler;
