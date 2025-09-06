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
    default: null,
  },

  isVerified: {
    type: Boolean,
    default: false,
  },

  authProvider: {
    type: String,
    default: "manual",
  },

  role: {
    type: String,
    default: "User",
  },

  profilePhoto: {
    type: String,
    default: "https://api.dicebear.com/7.x/thumbs/svg?seed=defaultUser",
  },

  


  // to be reviwed 

  store: {
    type: mongoose.Schema.ObjectId,
    ref: "Store",
  },
});

const User = model("User", userModel);

module.exports = User;
