const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const storeModel = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    banner: {
      type: String,
    },

    logo: {
      type: String,
    },

    owner: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },

    products: {
      type: [mongoose.Schema.ObjectId],
      ref: "Product",
    },
  },
  {
    timestamps: true,
  }
);

const Store = model("Store", storeModel);

module.exports = Store;
