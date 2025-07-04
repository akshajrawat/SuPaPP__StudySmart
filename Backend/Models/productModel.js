const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const productModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    thumbnail: {
      type: String,
      required: true,
    },

    images: {
      type: [String],
    },

    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },

    store: {
      type: mongoose.Schema.ObjectId,
      ref: "Store",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productModel);

module.exports = Product;
