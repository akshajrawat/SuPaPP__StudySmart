// basic imports
const { Server } = require("socket.io");
const http = require("http");
const express = require("express");

// creating a socket.io server
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["https://supapp-all-purpose-app.onrender.com/SuPaPP"],
    credentials: true,
  },
});

// handle online users

const onlineUsers = {}; //userId: SocketId

// get socket id of the online user

const getSocketId = (userId) => {
  return onlineUsers[userId];
};

// watching for connection and disconnection

io.on("connection", (socket) => {
  console.log("A user has connected", socket.id);

  const userId = socket.handshake.query.userId;
  if (userId) onlineUsers[userId] = socket.id;

  // send onlineUsers
  io.emit("getOnlineUsers", Object.keys(onlineUsers));

  socket.on("disconnect", () => {
    console.log("A user has disconnected", socket.id);
    delete onlineUsers[userId];
    io.emit("getOnlineUsers", Object.keys(onlineUsers));
  });
});

module.exports = { io, app, server, getSocketId };
