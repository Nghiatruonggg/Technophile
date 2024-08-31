import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const cartReducerSlice = createSlice({
    name: "cart",
    initialState: {
        productList: [],
        total: 0
    },
    reducers: {
        addToCart(state, action) {

            // Check if product has existed in the initialState or not
            const index = state.productList.findIndex(product => product.id === action.payload.id)
            if (index !== -1) {
                state.productList[index].quantity += action.payload.quantity
            } else {
                state.productList.push({
                    ...action.payload,
                    quantity: action.payload.quantity || 1
                })
            }
        }
    }
})

export const { addToCart } = cartReducerSlice.actions;
export default cartReducerSlice.reducer;