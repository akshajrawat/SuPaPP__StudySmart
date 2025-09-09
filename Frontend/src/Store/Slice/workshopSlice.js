import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Lib/axios";
import toast from "react-hot-toast";

// thunks

// create a new workshop
export const createWorkshop = createAsyncThunk(
  "workshop/createWorkshop",
  async (workShop, thunkAPI) => {
    try {
      const response = await axiosInstance.post(
        "/workspace/create-workspace",
        workShop
      );
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

// get all workshop of a specific user
export const getWorkshop = createAsyncThunk(
  "workshop/getWorkshop",
  async (_, thunkAPI) => {
    try {
      const response = await axiosInstance.get("/workspace/get-workspace");
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

// state management
const initialState = {
  workspace: [],
  loading: {
    workshopCreating: false,
    workshopFetching: false,
  },
};

const workshopSlice = createSlice({
  name: "workshop",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createWorkshop.pending, (state) => {
        state.loading.workshopCreating = true;
      })
      .addCase(createWorkshop.fulfilled, (state, action) => {
        state.loading.workshopCreating = false;
        state.workspace = [
          ...(state.workspace || []),
          action.payload.workspace,
        ];
      })
      .addCase(createWorkshop.rejected, (state) => {
        state.loading.workshopCreating = false;
      })
      .addCase(getWorkshop.pending, (state) => {
        state.loading.workshopFetching = true;
      })
      .addCase(getWorkshop.fulfilled, (state, action) => {
        state.loading.workshopFetching = false;
        state.workspace = action.payload.workspace;
      })
      .addCase(getWorkshop.rejected, (state) => {
        state.loading.workshopFetching = false;
      });
  },
});

export default workshopSlice.reducer;
