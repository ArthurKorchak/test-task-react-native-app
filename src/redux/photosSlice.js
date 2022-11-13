import { createSlice } from "@reduxjs/toolkit";
import { getPhotos } from "./operations";

const photosSlice = createSlice({
  name: "photos",
  initialState: {
    photosSet: null,
    isLoading: false,
  },
  extraReducers: {
    [getPhotos.pending](state) {
      state.isLoading = true;
    },
    [getPhotos.fulfilled](state, action) {
      state.photosSet = action.payload;
      state.isLoading = false;
    },
    [getPhotos.rejected](state) {
      state.isLoading = false;
    },
  },
});

export const photosReducer = photosSlice.reducer;