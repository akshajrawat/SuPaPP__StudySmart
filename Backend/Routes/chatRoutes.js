// Basic imports
const express = require("express");
const router = express.Router();

// controllers
const tokenHandler = require("../Middleware/tokenHandler");
const {
  sendMessage,
  getMessages,
} = require("../Controllers/messageController");

// routes

// Path :- /SuPaPP/chat/sendMessage
router.post("/sendMessage/:receiverId", tokenHandler, sendMessage);

// Path: /SuPaPP/chat/Messages
router.get("/Messages/:receiverId", tokenHandler, getMessages);

module.exports = router;
