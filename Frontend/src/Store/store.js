import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Slice/authSlice";
import chatReducer from "./Slice/chatSlice";
import shopReducer from "./Slice/shopSlice";
import workshopReducer from "./Slice/workshopSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    shop: shopReducer,
    workshop: workshopReducer,
  },
});
