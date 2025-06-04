const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const groupModel = new Schema(
  {
    groupName: {
      type: String,
      required: true,
    },

    groupMembers: {
      type: [mongoose.Schema.ObjectId],
      ref: "User",
      required: true,
    },

    groupAdmin: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: true,
    },

    messages: {
      type: [mongoose.Schema.ObjectId],
      ref: "Message",
    },
  },
  {
    timestamps: true,
  }
);

const Group = model("Group", groupModel);

module.exports = Group;
