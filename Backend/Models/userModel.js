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

  // This way you can set otp and expire both
  otp: {
    code: String,
    expiresAt: Date,
  },
});

const User = model("User", userModel);

module.exports = User;
