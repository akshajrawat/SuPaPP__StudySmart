import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./authSlice/authSlice";
import chatReducer from "./authSlice/chatSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
  },
});
