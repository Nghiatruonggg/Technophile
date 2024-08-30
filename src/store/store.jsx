import { combineReducers, configureStore, createReducer } from "@reduxjs/toolkit";
import cartReducerSlice from "../reducers/cartReducer";

const rootReducer = combineReducers({
    cartReducerSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store;