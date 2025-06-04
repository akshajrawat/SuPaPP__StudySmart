// Basic imports
const express = require("express");
const router = express.Router();

// controllers
const tokenHandler = require("../Middleware/tokenHandler");
const {
  sendMessage,
  getMessages,
  createGroup,
} = require("../Controllers/messageController");

// routes

// Path :- /SuPaPP/chat/sendMessage
router.post("/sendMessage/:receiverId", tokenHandler, sendMessage);

// Path: /SuPaPP/chat/getMessages
router.get("/getMessages/:receiverId", tokenHandler, getMessages);

// Path: /SuPaPP/chat/createGroup
router.get("/Messages/:receiverId", tokenHandler, createGroup);

module.exports = router;
