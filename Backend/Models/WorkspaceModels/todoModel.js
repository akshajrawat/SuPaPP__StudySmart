const mongoose = require("mongoose");
const Content = require("./contentModel");

const { Schema, model } = mongoose;

const todoModel = Content.discriminator(
  "Todo",
  new Schema({
    tasks: [
      {
        title: { type: String, required: true },
        status: {
          type: String,
          enum: ["pending", "completed"],
          default: "pending",
        },
      },
    ],
  })
);

const Todo = model("Todo", todoModel);
module.exports = Todo;
