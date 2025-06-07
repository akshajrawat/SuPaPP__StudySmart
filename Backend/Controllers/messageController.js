// basic imports
const asyncHandler = require("express-async-handler");
const Message = require("../Models/messageModel");
const User = require("../Models/userModel");
const { cloudinary } = require("../Config/cloudinary");
const { io, getSocketId } = require("../lib/socket");

// controller logic

// title: Send user message
// Path: /SuPaPP/chat/sendMessage
// Access: @PRIVATE
const sendMessage = asyncHandler(async (req, res) => {
  console.log("Received body is :-", req.body);

  // get params from url and sender id from req
  const { text } = req.body;
  const { receiverId } = req.params;
  const senderId = req.user.id;

  const receiver = await User.findOne({ _id: receiverId });
  if (!receiver) {
    res.status(400);
    throw new Error("No user found");
  }

  let imageUrl;

  if (req.file) {
    const result = await new Promise((resolve, reject) => {
      cloudinary.uploader
        .upload_stream({ resource_type: "image" }, (error, result) => {
          if (result) resolve(result);
          else reject(error);
        })
        .end(req.file.buffer);
    });

    imageUrl = result.secure_url;
  }

  const newMessage = await Message.create({
    senderId,
    receiverId,
    text,
    media: imageUrl,
  });

  // handling realtime messaging

  const receiverSocketId = getSocketId(receiverId);
  if (receiverSocketId) {
    io.to(receiverSocketId).emit("sendUserMessage", newMessage);
  }

  res.status(201).json({ success: true, message: newMessage });
});

// title: get messages
// Path: /SuPaPP/chat/getMessages
// Access: @PRIVATE
const getMessages = asyncHandler(async (req, res) => {
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
});

// title: create Group
// Path: /SuPaPP/chat/createGroup
// Access: @PRIVATE
const createGroup = asyncHandler(async (req, res) => {});

module.exports = {
  sendMessage,
  getMessages,
  createGroup,
};
