import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "@/app/utils/definitions";

type ArticlesState = {
  articles: Article[];
  loading: boolean;
};

const initialState: ArticlesState = {
  articles: [],
  loading: false,
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setSearchedArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = [...action.payload];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticle.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchArticle.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.articles = [...action.payload];
          state.loading = false;
        },
      );
  },
});

export const fetchArticle = createAsyncThunk(
  "articles/fetchArticle",
  async (title: string) => {
    const { data } = await axios.get(`/api/articles/${title}`);
    return data;
  },
);

export const { setSearchedArticles } = articlesSlice.actions;

export default articlesSlice.reducer;
