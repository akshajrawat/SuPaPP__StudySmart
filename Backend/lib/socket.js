// basic imports
const { Server } = require("socket.io");
const http = require("http");
const express = require("express");

// creating a socket.io server
const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: ["http://localhost:5173"],
    credentials: true,
  },
});

// handle online users

const onlineUsers = {}; //userId: SocketId

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

module.exports = { io, app, server };
