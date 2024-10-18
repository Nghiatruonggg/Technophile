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

const editPost = createAsyncThunk(
  "editPost",
  async (oldData, { rejectWithValue }) => {
    const { id, data } = oldData;
    try {
      const res = await axios.patch(`${posts_manage}/${id}`, data);
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

const deletePost = createAsyncThunk(
  "deletePost",
  async (deleteData, { rejectWithValue }) => {
    const {id, post} = deleteData
    try {
      await axios.delete(`${posts_manage}/${id}`);
      return id;
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
      // Get Posts Action
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

      // Create Post Action
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
      })

      // Edit Post Action
      .addCase(editPost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(editPost.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.posts.findIndex((post) => {
          return post.id === action.payload.id;
        });

        if (index !== -1) {
          state.posts[index] = action.payload;
        }
      })
      .addCase(editPost.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      // Delete Post Action
      .addCase(deletePost.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false
        state.posts = state.posts.filter((post) => {
          return post.id !== action.payload
        })
      })
  },
});

export default postsCRUDSlice.reducer;
export { getPost, createPost, editPost, deletePost };
