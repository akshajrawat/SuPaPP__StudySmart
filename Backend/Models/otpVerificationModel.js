// Import mongoose
const mongoose = require("mongoose");
const { Schema, model } = mongoose;

// Basic Otp Schema
const otpVerificationSchema = new Schema({
  username: String,

  email: {
    type: String,
    required: true,
    unique: true,
  },

  password: String, // hashed

  otp: {
    code: String,
    expiresAt: Date,
  },
});

const Otp = model("Otp", otpVerificationSchema);

module.exports = Otp;
