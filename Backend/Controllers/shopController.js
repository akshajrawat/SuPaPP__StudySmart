// basic imports
const asyncHandler = require("express-async-handler");
const User = require("../Models/userModel");
const Store = require("../Models/storeModel");

// controllers

// title: Upgrade user role to seller
// Path :- /SuPaPP/shop/upgrade-role-seller
// Access: @PRIVATE
const roleUpgradeSeller = asyncHandler(async (req, res) => {
  const { id } = req.user;

  // checks whether the user is present or not
  const user = await User.findById(id).select("-password");
  if (!user) {
    res.status(404);
    throw new Error("No user found");
  }

  // checks if the user is already a seller
  if (user.role === "seller") {
    return res.status(200).json({ message: "User is already a seller" });
  }

  user.role = "seller";
  await user.save();

  res.status(200).json({ message: "Role changed to Seller" });
});

// title: Create a store
// Path :- /SuPaPP/shop/create-store
// Access: @PRIVATE
const createStore = asyncHandler(async (req, res) => {
  const { logo, banner, description, name } = req.body;
  const { id } = req.user;

  // validates the user and his role
  const user = await User.findById(id).select("-password");
  if (!user || user.role != "seller") {
    res.status(404);
    throw new Error("User is not valid");
  }

  // check if the store already exist
  const existingStore = await Store.findOne({ owner: user._id });
  if (existingStore) {
    res.status(409);
    throw new Error("Store already exists");
  }

  // validates the name and description provided
  if (!name?.trim() || !description?.trim()) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }

  const newStore = await Store.create({
    name,
    description,
    banner,
    logo,
    owner: user._id,
  });

  res
    .status(201)
    .json({ message: "Store has been sucessfully created", store: newStore });
});

// exports
module.exports = {
  roleUpgradeSeller,
  createStore,
};
