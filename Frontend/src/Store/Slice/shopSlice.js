//  Basic imports
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstance } from "../../Lib/axios";

// Thunks

// fetch all the products
export const fetchProducts = createAsyncThunk(
  "shop/fetchProducts",
  async () => {
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
  }
);

// featch products based on search
export const searchProduct = createAsyncThunk(
  "shop/searchProduct",
  async (query) => {
    try {
      const response = await axiosInstance.get(`/shop/searchProduct/${query}`);
      console.log(response.data);
      return response.data;
    } catch (error) {
      console.error(error.message);
    }
  }
);

// fetch product based on id

export const getProduct = createAsyncThunk("shop/getProduct", async (id) => {
  try {
    const response = await axiosInstance.get(`/shop/product/${id}`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
});

// state management
const initialState = {

  // state
  products: [],
  searchResult: [],
  currentProduct: [],

  // loading
  isLoadingProduct: false,
  isLoading: false,
  noProductFound: false,
};

const shopSlice = createSlice({
  name: "shop",
  initialState: initialState,
  reducers: {
    clearSearch: (state) => {
      state.searchResult = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload;
      })
      .addCase(searchProduct.pending, (state) => {
        state.noProductFound = false;
        state.isLoading = true;
      })
      .addCase(searchProduct.rejected, (state) => {
        state.noProductFound = true;
      })
      .addCase(searchProduct.fulfilled, (state, action) => {
        state.noProductFound = false;
        state.isLoading = false;
        state.searchResult = action.payload;
      })
      .addCase(getProduct.pending, (state) => {
        state.isLoadingProduct = true;
      })
      .addCase(getProduct.fulfilled, (state, action) => {
        state.isLoadingProduct = false;
        state.currentProduct = action.payload;
      })
      .addCase(getProduct.rejected, (state) => {
        state.isLoadingProduct = false;
      });
  },
});

export const { clearSearch } = shopSlice.actions;
export default shopSlice.reducer;
