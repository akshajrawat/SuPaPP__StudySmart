const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const contentModel = new Schema(
  {
    workspace: {
      type: mongoose.Schema.ObjectId,
      ref: "Workspace",
      required: true,
    },

    title: {
      type: String,
      required: true,
    },
  },
  { discriminatorKey: "typeOfTask", timestamps: true }
);

const Content = model("Content", contentModel);
module.exports = Content;
