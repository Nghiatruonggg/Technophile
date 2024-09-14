import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const authReducerSlice = createSlice({
    name: "auth",
    initialState: {
        user: [],
        isLoading: false, 
        error: null
    },
    reducers: {},
})

export default authReducerSlice.reducer

