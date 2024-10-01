import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { mobile_categories } from "../untils/variable";

const removeProduct = createAsyncThunk(
  "removeProduct",
  async (id, { rejectWithValue }) => {
    try {
      const res = await axios.delete(mobile_categories + `/${id}`);
      return id;
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

const editProduct = createAsyncThunk(
  "editProduct",
  async (editData, { rejectWithValue }) => {
    const {id, data} = editData
    try {
      const res = await axios.patch(mobile_categories + `/${id}`, data);
      return res.data;
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

const addNewProduct = createAsyncThunk(
  "addNewProduct",
  async (newData, { rejectWithValue }) => {
    try {
      const res = await axios.post(mobile_categories, newData);
      return res.data;
    } catch (error) {
      const serializableError = {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
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
      state.productAdmin = action.payload;
    },
    removeProductRender: (state, action) => {
      state.productAdmin = state.productAdmin.filter((product) => {
        return product.id !== action.payload;
      })
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(removeProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.isLoading = false;
        // state.productAdmin = state.productAdmin.filter((product) => {
        //   return product.id !== action.payload;
        // });
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Edit Product case
      .addCase(editProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null
      })
      .addCase(editProduct.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(editProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      
      // Add New Product case
      .addCase(addNewProduct.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addNewProduct.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(addNewProduct.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
  },
});

export default productCRUDSlice.reducer;
export { removeProduct, addNewProduct, editProduct };
export const { getProduct, removeProductRender } = productCRUDSlice.actions;
