import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "@/db/schema";

type ArticlesState = {
  articles: Article[];
};

const initialState: ArticlesState = {
  articles: [],
};

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action: PayloadAction<Article[]>) => {
      state.articles = action.payload;
    },
  },
});

export const { setArticles } = articlesSlice.actions;
export default articlesSlice.reducer;
