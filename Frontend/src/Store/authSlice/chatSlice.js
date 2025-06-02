import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Lib/axios";
import toast from "react-hot-toast";

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
  reducers: {},
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
      });
  },
});

export default chatSlice.reducer;
