import { createSlice } from "@reduxjs/toolkit";

const cartReducerSlice = createSlice({
  name: "cart",
  initialState: {
    productList: JSON.parse(localStorage.getItem("cartProducts")) || [],
    total: JSON.parse(localStorage.getItem("cartTotal")) || 0,
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
        newTotal += price * quantity;
      });

      state.total = newTotal;

      // Save into localStorage
      localStorage.setItem("cartProducts", JSON.stringify(state.productList));
      localStorage.setItem("cartTotal", JSON.stringify(state.total));
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
        newTotal += price * quantity;
      });

      state.total = newTotal;

      // Save into localStorage
      localStorage.setItem("cartProducts", JSON.stringify(state.productList));
      localStorage.setItem("cartTotal", JSON.stringify(state.total));
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
        newTotal += price * quantity;
      });

      state.total = newTotal;

      // Save into localStorage
      localStorage.setItem("cartProducts", JSON.stringify(state.productList));
      localStorage.setItem("cartTotal", JSON.stringify(state.total));
    },

    deleteProduct(state, action) {
      state.productList = state.productList.filter(
        (product) => product.id !== action.payload
      );

      // Recalculate total
      let newTotal = 0;
      state.productList.forEach(({ price, quantity }) => {
        newTotal += price * quantity;
      });

      state.total = newTotal;

      // Save into localStorage
      localStorage.setItem("cartProducts", JSON.stringify(state.productList));
      localStorage.setItem("cartTotal", JSON.stringify(state.total));
    },

    deleteAllProduct(state) {
      state.productList = []
      
      // Recalculate total
      let newTotal = 0;
      state.total = newTotal;

      // Save into localStorage
      localStorage.setItem("cartProducts", JSON.stringify(state.productList));
      localStorage.setItem("cartTotal", JSON.stringify(state.total));
    }
  },
});

export const { addToCart, addQuantity, minusQuantity, deleteProduct, deleteAllProduct } =
  cartReducerSlice.actions;
export default cartReducerSlice.reducer;
