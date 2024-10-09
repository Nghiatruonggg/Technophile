import { combineSlices, configureStore } from "@reduxjs/toolkit";
import cartReducerSlice from "../reducers/cartReducerSlice";
import authReducerSlice from "../reducers/authReducerSlice";
import productCRUDSlice from "../reducers/productCRUDSlice";
import orderCRUDSlice from "../reducers/orderCRUDSlice"

const rootReducer = combineSlices({
  cart: cartReducerSlice,
  auth: authReducerSlice,
  productCRUD: productCRUDSlice,
  orderCRUD: orderCRUDSlice
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
