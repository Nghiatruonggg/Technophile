import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { order_manage } from "../untils/variable";

const getOrder = createAsyncThunk(
    "getOrder",
    async (none, {rejectWithValue}) => {
        try {
            const res = await axios.get(order_manage)
            return res.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

const orderCRUDSlice = createSlice({
    name: "orderCRUD",
    initialState: {
        purchasedOrders: [],
        isLoading: false,
        error: null
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder
        .addCase(getOrder.pending, (state) => {
            state.isLoading = true
            state.error = null
        })
        .addCase(getOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.purchasedOrders = action.payload
        })
        .addCase(getOrder.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.payload
        })
    }
})

export default orderCRUDSlice.reducer
export {getOrder}
