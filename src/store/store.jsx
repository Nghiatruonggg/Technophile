import { combineSlices, configureStore } from "@reduxjs/toolkit";
import cartReducerSlice from "../reducers/cartReducerSlice";
import authReducerSlice from "../reducers/authReducerSlice";
import productCRUDSlice from "../reducers/productCRUDSlice";
import orderCRUDSlice from "../reducers/orderCRUDSlice"
import postsCRUDSlice from "../reducers/postsCRUDSlice"

const rootReducer = combineSlices({
  cart: cartReducerSlice,
  auth: authReducerSlice,
  productCRUD: productCRUDSlice,
  orderCRUD: orderCRUDSlice,
  postsCRUD: postsCRUDSlice
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
