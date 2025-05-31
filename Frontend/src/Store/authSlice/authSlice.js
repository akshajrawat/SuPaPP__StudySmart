import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    start: (state) => {
      state.loading = true;
      state.error = null;
    },
    loaderStart: (state) => {
      state.loading = true;
    },
    loaderStop: (state) => {
      state.loading = false;
    },
    success: (state, action) => {
      state.loading = false;
      state.error = null;
      state.user = action.payload.user;
      state.isAuthenticated = false;
    },
    authenticate: (state) => {
      state.isAuthenticated = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const { start, success, loaderStop, loaderStart, authenticate } = authSlice.actions;

export default authSlice.reducer;
