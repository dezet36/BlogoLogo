import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AxiosError } from "axios";
import { apiConfigPublic } from "api";
import { BlogItem } from "types";

interface ArticlesState {
  article: BlogItem;
  news: BlogItem;
  isLoading: boolean;
  error: null | string;
}

const initialState: ArticlesState = {
  article: {} as BlogItem,
  news: {} as BlogItem,
  isLoading: false,
  error: null,
};

export const fetchArticleById = createAsyncThunk<
  BlogItem,
  string,
  { rejectValue: string }
>("articles/fetchArticles", async (params, { rejectWithValue }) => {
  try {
    return await apiConfigPublic.getArticleById(params);
  } catch (error) {
    const errorMessage = error as AxiosError;
    return rejectWithValue(errorMessage.message);
  }
});

export const fetchNewsById = createAsyncThunk<
  BlogItem,
  string,
  { rejectValue: string }
>("news/fetchSingleNews", async (params, { rejectWithValue }) => {
  try {
    return await apiConfigPublic.getNewsById(params);
  } catch (error) {
    const errorMessage = error as AxiosError;
    return rejectWithValue(errorMessage.message);
  }
});

export const singlePageSlice = createSlice({
  name: "singleBlogItem",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchArticleById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchArticleById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.article = payload;
    });
    builder.addCase(fetchArticleById.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });

    builder.addCase(fetchNewsById.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(fetchNewsById.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.news = payload;
    });
    builder.addCase(fetchNewsById.rejected, (state, { payload }) => {
      if (payload) {
        state.isLoading = false;
        state.error = payload;
      }
    });
  },
});

export default singlePageSlice.reducer;
