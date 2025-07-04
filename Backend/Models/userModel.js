// Import mongoose
const mongoose = require("mongoose");

const { Schema, model } = mongoose;

// Basic User Schema

const userModel = new Schema({
  username: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },

  role: {
    type: String,
    default: "User",
  },

  profilePhoto: {
    type: String,
    default: "https://api.dicebear.com/7.x/thumbs/svg?seed=defaultUser",
  },

  store: {
    type: mongoose.Schema.ObjectId,
    ref: "Store",
  },

  otp: {
    code: String,
    expiresAt: Date,
  },
});

const User = model("User", userModel);

module.exports = User;
