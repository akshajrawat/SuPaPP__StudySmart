// basic imports
const asyncHandler = require("express-async-handler");
const Message = require("../Models/messageModel");
const User = require("../Models/userModel");

// controller logic

// title: Send user message
// Path: /SuPaPP/chat/sendMessage
// Access: @PRIVATE
const sendMessage = asyncHandler(async (req, res) => {
  try {
    console.log("Received body is :-", req.body);

    // get params from url and sender id from req
    const { text, media } = req.body;
    const { receiverId } = req.params;
    const senderId = req.user.id;

    const receiver = await User.findOne({ _id: receiverId });
    if (!receiver) {
      res.status(400);
      throw new Error("No user found");
    }
    
    const newMessage = await Message.create({
      senderId,
      receiverId,
      text,
      media,
    });

    res.status(201).json({ success: true, message: newMessage });
  } catch (error) {
    res.status(500);
    throw new Error("Error in messageController || send message");
  }
});

// title: Send get messages
// Path: /SuPaPP/chat/Messages
// Access: @PRIVATE
const getMessages = asyncHandler(async (req, res) => {
  try {
    console.log("Received body is", req.body);

    const senderId = req.user.id;
    const { receiverId } = req.params;

    const messages = await Message.find({
      $or: [
        { senderId, receiverId },
        { senderId: receiverId, receiverId: senderId },
      ],
    }).sort({ createdAt: 1 });

    if (!messages) return;

    res.status(200).json(messages);
  } catch (error) {
    res.status(500);
    throw new Error("Error in messageController || get message");
  }
});

module.exports = {
  sendMessage,
  getMessages,
};
