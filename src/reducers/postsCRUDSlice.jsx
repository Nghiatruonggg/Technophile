import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { posts_manage } from "../untils/variable";

const getPost = createAsyncThunk("getPost", async (_, { rejectWithValue }) => {
  try {
    const res = await axios.get(posts_manage);
    return res.data;
  } catch (error) {
    const serializableError = {
      message: error.message,
      status: error.response?.status,
      data: error.response?.data,
    };

    return rejectWithValue(serializableError);
  }
});

const createPost = createAsyncThunk(
  "createPost",
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(posts_manage, data);
      return res.data;
    } catch (error) {
      const serializableError = {
        message: error.message,
        status: error.response?.status,
        data: error.response?.data,
      };

      return rejectWithValue(serializableError);
    }
  }
);

const postsCRUDSlice = createSlice({
  name: "postsCRUD",
  initialState: {
    posts: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
      })
      .addCase(getPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(createPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.posts.push(action.payload);
        state.isLoading = false;
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default postsCRUDSlice.reducer;
export { getPost, createPost };
