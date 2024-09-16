import { combineSlices, configureStore } from "@reduxjs/toolkit";
import cartReducerSlice from "../reducers/cartReducerSlice";


const rootReducer = combineSlices({
    cart: cartReducerSlice
})

const store = configureStore({
    reducer: rootReducer
});

export default store;