import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import React from 'react'
import { url_login } from '../untils/variable'
import { useNavigate } from 'react-router-dom'

const submitLogin = createAsyncThunk(
    "submitLogin",
    async(user_info, {rejectWithValue}) => {
        try {
            const res = await axios.post(url_login, user_info)
            // Update token on localStorage
            localStorage.setItem("user_token", JSON.stringify(res.data.user.token))
            return res.data
        } catch (error) {
             // Extract only serializable values
             const serializableError = {
                message: error.message,
                status: error.response?.status, // status code if available
                data: error.response?.data // error data from server
            };
            return rejectWithValue(serializableError);
        }
    }
);

const authReducerSlice = createSlice({
    name: "auth",
    initialState: {
        user_info: null,
        token: localStorage.getItem("user_token") || null,
        isLoading: false, 
        error: null
    },
    reducers: {
        logout: (state) => {
            state.user_info = null
            state.token = localStorage.removeItem("user_token")
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(submitLogin.pending, (state) => {
                state.isLoading = true
                state.error = null
            })
            .addCase(submitLogin.fulfilled, (state,action) => {
                state.user_info = action.payload.user
                state.token = action.payload.user.token
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
