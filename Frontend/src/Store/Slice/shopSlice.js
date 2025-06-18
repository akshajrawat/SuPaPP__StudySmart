//  Basic imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Lib/axios";

// Thunks

export const fetchProducts = createAsyncThunk("shop/fetchProducts", async () => {
  try {
    const response = await axiosInstance.get("/shop/products");
    const cleanedProducts = response.data.products.map((product) => ({
      ...product,
      title:
        product.title.trim().charAt(0).toUpperCase() +
        product.title.trim().slice(1),
      category:
        product.category
          .replace(/[-–—].*$/, "")
          .trim()
          .charAt(0)
          .toUpperCase() +
        product.category
          .replace(/[-–—].*$/, "")
          .trim()
          .slice(1), // Keep part before "-"
    }));
    return cleanedProducts;
  } catch (error) {
    console.error(error.message);
  }
});

// state management
const initialState = {
  products: [],
};

const shopSlice = createSlice({
  name: "shop",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default shopSlice.reducer;
