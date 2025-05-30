const jwt = require("jsonwebtoken");
const User = require("../Models/userModel");

const tokenHandler = async (req, res, next) => {
  const token = req.cookies.token;

  if (!token) {
    return res
      .status(401)
      .json({ message: "Access Denied. No token provided." });
  }

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);

    if (!verified) {
      res.status(401);
      throw new Error("Token has been expired");
    }

    const userInfo = await User.findOne({ email: verified.email });

    if (!userInfo) {
      res.status(401);
      throw new Error("User does not exist");
    }

    req.user = {
      id: userInfo._id,
      username: userInfo.username,
      email: userInfo.email,
      role: userInfo.role,
    };
    next();
  } catch (error) {
    res.status(401).json({ message: "Invailid or expired token" });
  }
};

module.exports = tokenHandler;
