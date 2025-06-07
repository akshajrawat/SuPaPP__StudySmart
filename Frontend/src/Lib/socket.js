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

  const handler = (userIds) => {
    console.log(userIds);
    onlineUserHandler(userIds);
  };

  socket.on("getOnlineUsers", handler);

  return () => {
    socket.off("getOnlineUsers", handler);
  };
};

export const getSocket = () => socket;

export const getSocketMessage = (callback) => {
  const handler = (message) => {
    callback(message);
  };

  socket.on("sendUserMessage", handler);

  return () => {
    socket.off("sendUserMessage", handler);
  };
};
