import { combineSlices, configureStore } from "@reduxjs/toolkit";
import cartReducerSlice from "../reducers/cartReducerSlice";
import authReducerSlice from "../reducers/authReducerSlice";


const rootReducer = combineSlices({
    cart: cartReducerSlice,
    auth: authReducerSlice
})

const store = configureStore({
    reducer: rootReducer
});

export default store;