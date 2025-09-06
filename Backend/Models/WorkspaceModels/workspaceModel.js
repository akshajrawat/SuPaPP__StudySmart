const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const workspaceModel = new Schema(
  {
    title: {
      type: String,
      required: true,
    },

    description: {
      type: String,
    },

    content: {
      type: mongoose.Schema.ObjectId,
      ref: "Content",
    },

    createdBy: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Workspace = model("Workspace", workspaceModel);
module.exports = Workspace;
