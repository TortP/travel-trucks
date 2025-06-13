import { createSlice } from '@reduxjs/toolkit';

const loadFavorites = () => {
  const stored = localStorage.getItem('favorites');
  return stored ? JSON.parse(stored) : [];
};

const initialState = {
  items: loadFavorites(),
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    toggleFavorite(state, action) {
      const camperId = action.payload;
      if (state.items.includes(camperId)) {
        state.items = state.items.filter((id) => id !== camperId);
      } else {
        state.items.push(camperId);
      }
      localStorage.setItem('favorites', JSON.stringify(state.items));
    },
  },
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;
