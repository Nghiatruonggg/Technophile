import { createSlice } from "@reduxjs/toolkit";

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
    }
})

export default orderCRUDSlice.reducer