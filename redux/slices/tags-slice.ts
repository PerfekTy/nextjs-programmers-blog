import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTags = createAsyncThunk("tags/fetchTags", async () => {
  const { data } = await axios.get("/api/top-articles");
  return data;
});

type tagsSliceT = {
  tags: string;
  loading: boolean;
};

const initialState: tagsSliceT = {
  tags: "",
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
        (state, action: PayloadAction<tagsSliceT[]>) => {
          state.tags = action.payload[0].tags;
          state.loading = false;
        },
      );
  },
});

export default tagsSlice.reducer;
