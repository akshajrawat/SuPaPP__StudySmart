import { io } from "socket.io-client";

const BASE_URL = "http://localhost:3000";

let socket = null;

export const socketConnect = (userId, onlineUserHandler) => {
  if (!socket) {
    socket = io(BASE_URL, {
      query: {
        userId: userId,
      },
    });
    socket.connect();
  }

  socket.on("getOnlineUsers", (userIds) => {
    console.log(userIds);
    onlineUserHandler(userIds);
  });

  return socket;
};

export const getSocket = () => socket;
