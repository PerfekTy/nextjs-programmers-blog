import axios from "axios";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
// @ts-ignore
import { Article } from "@/db/schema";

type ArticlesState = {
  articles: Article[];
  loading: {
    articles: boolean;
    categorize: boolean;
  };
};

const initialState: ArticlesState = {
  articles: [],
  loading: {
    articles: false,
    categorize: false,
  },
};

export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async () => {
    const { data } = await axios.get("/api/articles");
    return data;
  },
);

export const categorizeArticles = createAsyncThunk(
  "articles/categorizeArticles",
  async (categorize: string) => {
    const { data } = await axios.post("/api/articles", {
      categorize,
    });
    return data;
  },
);

export const fetchArticle = createAsyncThunk(
  "articles/fetchArticle",
  async (title: string) => {
    const { data } = await axios.get(`/api/articles/${title}`);
    return data;
  },
);

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
      .addCase(fetchArticles.pending, (state) => {
        state.loading.articles = true;
      })
      .addCase(
        fetchArticles.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.articles = [...action.payload];
          state.loading.articles = false;
        },
      );
    builder
      .addCase(categorizeArticles.pending, (state) => {
        state.loading.categorize = true;
      })
      .addCase(
        categorizeArticles.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.articles = [...action.payload];
          state.loading.categorize = false;
        },
      );
    builder
      .addCase(fetchArticle.pending, (state) => {
        state.loading.articles = true;
      })
      .addCase(
        fetchArticle.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.articles = [...action.payload];
          state.loading.articles = false;
        },
      );
  },
});

export const { setSearchedArticles } = articlesSlice.actions;

export default articlesSlice.reducer;
