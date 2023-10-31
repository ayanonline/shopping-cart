import { createSlice } from "@reduxjs/toolkit";
import { getProducts } from "../actions/getProducts";

const productSlice = createSlice({
  name: "Products",
  initialState: {
    isLoading: true,
    products: null,
    error: null,
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;
