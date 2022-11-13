import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const keyAPI = 'ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9'
axios.defaults.baseURL = 'https://api.unsplash.com/photos/';

export const getPhotos = createAsyncThunk(
  "photos/getPhotos", async (_, thunkAPI) => {
    try {
      const response = await axios.get(`?client_id=${keyAPI}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    };
  },
);

