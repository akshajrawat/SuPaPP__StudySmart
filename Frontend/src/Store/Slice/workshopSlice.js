import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Lib/axios";

// thunks 

// state management
const initialState = {
  workspace: null,
  loading: false,
};

const workshopSlice = createSlice({
  name: "workshop",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {},
});

export default workshopSlice.reducer;
