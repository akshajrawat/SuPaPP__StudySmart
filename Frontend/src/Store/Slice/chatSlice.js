import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Lib/axios";
import toast from "react-hot-toast";
import reducer from "./authSlice";

// thunks

export const getUsers = createAsyncThunk("chat/getUsers", async (thunkAPI) => {
  try {
    const response = await axiosInstance.get("/auth/users");
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    const message = error.response?.data?.message || error.message;
    toast.error(message);
    return thunkAPI.rejectWithValue(message);
  }
});

export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async (message, thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const receiver = state.chat.selected._id;
      const response = await axiosInstance.post(
        `/chat/sendMessage/${receiver}`,
        message
      );
      if (response.status === 201) {
        return response.data;
      }
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getMessage = createAsyncThunk(
  "chat/getMessage",
  async (thunkAPI) => {
    try {
      const state = thunkAPI.getState();
      const receiver = state.chat.selected._id;
      const response = await axiosInstance.get(
        `/chat/getMessages/${receiver}`,
        message
      );
      if (response.status === 200) {
        return response.data;
      }
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const initialState = {
  message: [],
  users: [],
  selected: null,
  isUsersLoading: false,
  isMessagesLoading: false,
  error: null,
};

const chatSlice = createSlice({
  name: "chat",
  initialState: initialState,
  reducers: {
    setSelectedUser: (state, action) => {
      state.selected = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.isUsersLoading = true;
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.isUsersLoading = false;
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.isUsersLoading = false;
        state.error = action.payload;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.message = [...state.message, action.payload.message];
      })
      .addCase(sendMessage.rejected, () => {
        toast.error("Unable to send message");
      });
  },
});

export const { setSelectedUser } = chatSlice.actions;
export default chatSlice.reducer;
