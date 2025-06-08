import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCampers, fetchCamperById } from '../../services/campersApi';

export const getCampers = createAsyncThunk(
  'campers/getCampers',
  async (params, thunkAPI) => {
    try {
      const response = await fetchCampers(params);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getCamperById = createAsyncThunk(
  'campers/getCamperById',
  async (id, thunkAPI) => {
    try {
      const response = await fetchCamperById(id);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
