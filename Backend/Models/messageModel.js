const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const messageModel = new Schema(
  {
    senderId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },

    receiverId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },

    groupId: {
      type: mongoose.Schema.ObjectId,
      ref: "Group",
    },

    text: {
      type: String,
    },

    media: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Message = model("Message", messageModel);

module.exports = Message;
