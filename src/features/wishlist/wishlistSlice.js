
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlists: {}, 
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const { movieName, movie } = action.payload;
      if (!state.wishlists[movieName]) {
        state.wishlists[movieName] = []; 
      }
      state.wishlists[movieName].push(movie);
    },
    removeFromWishlist: (state, action) => {
      const { movieName, movie } = action.payload;
      if (state.wishlists[movieName]) {
        state.wishlists[movieName] = state.wishlists[movieName].filter(
          (m) => m.imdbID !== movie.imdbID
        );
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;