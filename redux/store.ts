import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articles-slice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
