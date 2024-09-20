import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { mobile_categories } from "../untils/variable";
import { act } from "react";

const removeProduct = createAsyncThunk(
  "removeProduct",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(mobile_categories + `/${id}`);
      return res.data
    } catch (error) {
      const serializableError = {
        message: error.message,
        status: error.response?.status, // status code if available
        data: error.response?.data, // error data from server
      };

      return rejectWithValue(serializableError);
    }
  }
);

const productCRUDSlice = createSlice({
  name: "productCRUD",
  initialState: {
    productAdmin: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    getProduct: (state, action) => {
        state.productAdmin = action.payload
    },

    removeProductRender: (state, action) => {
        const id = action.payload
        state.productAdmin = state.productAdmin.filter((product) => {
            return product.id !== id
        })
    }
  },
  extraReducers: (builder) => {
    builder
        .addCase(removeProduct.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        .addCase(removeProduct.fulfilled, (state, action) =>{
            state.isLoading = false
        })
        .addCase(removeProduct.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
  },
});

export default productCRUDSlice.reducer;
export {removeProduct}
export const {getProduct, removeProductRender} = productCRUDSlice.actions
