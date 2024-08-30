import { createSlice } from "@reduxjs/toolkit";

const cartReducerSlice = createSlice({
    name: "cart",
    initialState: {
        list: [],
        total: 0
    },
    reducers: {

    }
})


export default cartReducerSlice;