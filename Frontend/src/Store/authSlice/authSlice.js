import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Lib/axios";
import toast from "react-hot-toast";

// Thunk

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user) => {
    try {
      const response = await axiosInstance.post("/auth/register", user);
      if (response.status === 201) {
        toast.success(response.data.message);
        return response.data;
      }
    } catch (error) {
      toast.error(error.response.data.message || error.message);
      throw new Error(error.response.data.message || error.message);
    }
  }
);

export const verifyOtp = createAsyncThunk("auth/verifyOtp", async (submit) => {
  try {
    const response = await axiosInstance.post("/auth/verify-otp", submit);
    if (response.status === 200) {
      toast.success(response.data.message);
      return response.data;
    }
  } catch (error) {
    toast.error(error.response.data.message || error.message);
    throw new Error(error.response.data.message || error.message);
  }
});

export const authChecking = createAsyncThunk("auth/authChecking", async () => {
  try {
    const response = await axiosInstance.get("/auth/verify-token");
    if (response.status === 200) {
      toast.success("Data recovered");
      return response.data;
    }
  } catch (error) {
    toast.error(error.response.data.message || error.message);
    throw new Error(error.response.data.message || error.message);
  }
});

export const loginUser = createAsyncThunk("auth/loginUser", async (user) => {
  try {
    const response = await axiosInstance.post("/auth/login", user);
    if (response.status === 200) {
      toast.success(response.data.message);
      return response.data.user;
    } else {
      toast.error("Failed");
    }
  } catch (error) {
    toast.error(error.response.data.message || error.message);
    throw new Error(error.response.data.message || error.message);
  }
});
const initialState = {
  user: null,
  isAuthenticated: false,
  isRegistering: false,
  loading: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loaderStart: (state) => {
      state.loading = true;
    },
    loaderStop: (state) => {
      state.loading = false;
    },

    authenticate: (state) => {
      state.isAuthenticated = true;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading = false;
        state.isRegistering = true;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading = false;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.isRegistering = false;
      })
      .addCase(verifyOtp.rejected, (state) => {
        state.loading = false;
      })
      .addCase(authChecking.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading = false;
        state.isAuthenticated = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { loaderStop, loaderStart, authenticate } = authSlice.actions;

export default authSlice.reducer;
