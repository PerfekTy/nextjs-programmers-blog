import { configureStore } from "@reduxjs/toolkit";
import articlesSlice from "./slices/articles-slice";

export const store = configureStore({
  reducer: {
    articles: articlesSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
