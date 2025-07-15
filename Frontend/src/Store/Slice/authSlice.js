import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Lib/axios";
import toast from "react-hot-toast";

// Thunk

export const registerUser = createAsyncThunk(
  "auth/registerUser",
  async (user, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/auth/register", user);
      if (response.status === 201) {
        toast.success(response.data.message);
        return response.data;
      }
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const verifyOtp = createAsyncThunk(
  "auth/verifyOtp",
  async (submit, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/auth/verify-otp", submit);
      if (response.status === 200) {
        toast.success(response.data.message);
        return response.data;
      }
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authChecking = createAsyncThunk(
  "auth/authChecking",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/auth/verify-token");
      if (response.status === 200) {
        toast.success("Data recovered");
        return response.data;
      }
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      console.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (user, thunkAPI) => {
    try {
      const response = await axiosInstance.post("/auth/login", user);
      if (response.status === 200) {
        toast.success(response.data.message);
        return response.data.user;
      } else {
        toast.error("Failed");
      }
    } catch (error) {
      const message = error.response?.data?.message || error.message;
      toast.error(message);
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// initial state

const initialState = {
  user: null,
  isAuthenticated: false,
  isRegistering: false,
  loading: {
    register: false,
    checking: true,
    otp: false,
    login: false,
  },
  socket: false,
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
        state.loading.register = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.loading.register = false;
        state.isRegistering = true;
        state.user = action.payload.user;
      })
      .addCase(registerUser.rejected, (state) => {
        state.loading.register = false;
      })
      .addCase(verifyOtp.pending, (state) => {
        state.loading.otp = true;
      })
      .addCase(verifyOtp.fulfilled, (state) => {
        state.loading.otp = false;
        state.isAuthenticated = true;
        state.isRegistering = false;
      })
      .addCase(verifyOtp.rejected, (state) => {
        state.loading.otp = false;
      })
      .addCase(authChecking.pending, (state) => {
        state.loading.checking = true;
      })
      .addCase(authChecking.fulfilled, (state, action) => {
        state.loading.checking = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(authChecking.rejected, (state) => {
        state.loading.checking = false;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading.login = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading.login = false;
        state.isAuthenticated = true;
        state.user = action.payload;
      })
      .addCase(loginUser.rejected, (state) => {
        state.loading.login = false;
        state.isAuthenticated = false;
      });
  },
});

// Action creators are generated for each case reducer function
export const { loaderStop, loaderStart, authenticate } = authSlice.actions;

export default authSlice.reducer;
