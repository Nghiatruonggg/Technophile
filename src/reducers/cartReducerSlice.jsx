import { createSlice } from "@reduxjs/toolkit";
import React from "react";

const cartReducerSlice = createSlice({
  name: "cart",
  initialState: {
    productList: [],
    total: 0,
  },
  reducers: {
    addToCart(state, action) {
      // Check if product has existed in the initialState or not
      const index = state.productList.findIndex(
        (product) => product.id === action.payload.id
      );

      
      if (index !== -1) {
        state.productList[index].quantity += action.payload.quantity;
      } else {
        state.productList.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }

      // Recalculate total

      let newTotal = 0;
      state.productList.forEach(({ price, quantity }) => {
        newTotal += parseInt(price) * quantity;
      });

      state.total = newTotal;
    },

    addQuantity(state, action) {
      const product = state.productList.find(
        (product) => product.id === action.payload
      );

      if (product) {
        product.quantity += 1;
      }

      // Recalculate total
      let newTotal = 0;
      state.productList.forEach(({ price, quantity }) => {
        newTotal += parseInt(price) * quantity;
      });

      state.total = newTotal;
    },

    minusQuantity(state, action) {
      const product = state.productList.find(
        (product) => product.id === action.payload
      );

      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }

      // Recalculate total
      let newTotal = 0;
      state.productList.forEach(({ price, quantity }) => {
        newTotal += parseInt(price) * quantity;
      });

      state.total = newTotal;
    },
  },
});

export const { addToCart, addQuantity, minusQuantity } =
  cartReducerSlice.actions;
export default cartReducerSlice.reducer;
