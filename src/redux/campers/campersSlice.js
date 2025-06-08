import { createSlice } from '@reduxjs/toolkit';
import { getCampers, getCamperById } from './campersThunks';

const initialState = {
  list: [],
  selected: null,
  isLoading: false,
  error: null,
};

const campersSlice = createSlice({
  name: 'campers',
  initialState,
  reducers: {
    clearSelectedCamper(state) {
      state.selected = null;
    },
    resetCampers(state) {
      state.list = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        state.total = action.payload.total;
        state.isLoading = false;
        state.list = [...state.list, ...action.payload.items];
      })

      .addCase(getCampers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      .addCase(getCamperById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
        state.selected = null;
      })
      .addCase(getCamperById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selected = action.payload;
      })
      .addCase(getCamperById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { clearSelectedCamper, resetCampers } = campersSlice.actions;
export default campersSlice.reducer;
