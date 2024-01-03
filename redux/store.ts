import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articles-slice";
import tagsReducer from "./slices/tags-slice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    tags: tagsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
