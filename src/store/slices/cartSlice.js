import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      // first serach for the product that passed in payload
      const existingProduct = state.find(
        (product) => product.id === action.payload.id,
      );
      // if the payload product exits in cart then just update the quantity
      if (existingProduct) {
        return state.map((product) =>
          product.id === action.payload.id
            ? {
                ...product,
                quantity: product.quantity + action.payload.quantity,
              }
            : product,
        );
      } else {
        // if the product is not present in cart then add it
        return [...state, action.payload];
      }
    },

    // INCREASE QUANTITY
    increaseQuantituy: (state, action) => {
      return state.map((product) =>
        product.id === action.payload
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      );
    },

    // DECREASE QUANTITY
    decreaseQuantituy: (state, action) => {
      return state.map((product) =>
        product.id === action.payload
          ? product.quantity > 1
            ? {
                ...product,
                quantity: product.quantity - 1,
              }
            : product
          : product,
      );
    },

    // REMOVE FROM CART
    removeItem: (state, action) => {
      return state.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addToCart, increaseQuantituy, decreaseQuantituy, removeItem } =
  cartSlice.actions;
export default cartSlice.reducer;
