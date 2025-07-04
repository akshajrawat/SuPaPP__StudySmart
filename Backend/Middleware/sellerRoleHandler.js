// basic imports
const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");

// middleware
const sellerHandler = asyncHandler(async (req, res) => {
  const { id } = req.user;

  const user = await User.findById(id).select("-password");

  if (!user) {
    res.status(404);
    throw new Error("User does not exist");
  }

  if (user.role != "seller") {
    res.status(401);
    throw new Error("User is not authenticated to access this url");
  }

  res.status(200).json({ message: "Authenticated" });
});

module.exports = sellerHandler;
