import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'
import { url_login } from '../untils/variable'
import { useNavigate } from 'react-router-dom'

const submitLogin = createAsyncThunk(
    "submitLogin",
    async(user_info, {rejectedWithValue}) => {
        try {
            const res = await axios.post(url_login, user_info)
            return res.data
        } catch (error) {
            return rejectedWithValue(error)
        }
    }
);

const authReducerSlice = createSlice({
    name: "auth",
    initialState: {
        user_info: null,
        isLoading: false, 
        error: null
    },
    reducers: {
        logout: (state) => {
            state.user_info = null
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitLogin.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(submitLogin.fulfilled, (state,action) => {
                state.user_info = action.payload
                state.isLoading = false
            })
            .addCase(submitLogin.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    }
})

export default authReducerSlice.reducer
export const {logout} = authReducerSlice.actions
export {submitLogin}
