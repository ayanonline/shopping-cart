import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk(
  "products/getproducts",
  async (_, thunkAPI) => {
    try {
      const response = await axios({
        method: "GET",
        url: "https://fakestoreapi.com/products",
      });
      if (response.status === 200) {
        return response.data;
      } else {
        throw new Error("can't get response");
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
