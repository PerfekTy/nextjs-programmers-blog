import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type tagsSliceT = {
  tags: {
    tag: string;
    count: number;
  }[];
  loading: boolean;
};

const initialState: tagsSliceT = {
  tags: [{ tag: "", count: 0 }],
  loading: false,
};

const tagsSlice = createSlice({
  name: "tags",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTags.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchTags.fulfilled,
        (state, action: PayloadAction<{ tag: string; count: number }[]>) => {
          state.tags = [...action.payload];
          state.loading = false;
        },
      );
  },
});

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const { data } = await axios.get("/api/top-articles");

  return data;
});

export default tagsSlice.reducer;
