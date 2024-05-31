import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlists: {}, // Each key will be a username, and the value will be an array of movies
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const { username, movie } = action.payload;
      if (!state.wishlists[username]) {
        state.wishlists[username] = []; // Initialize the wishlist if it doesn't exist
      }
      state.wishlists[username].push(movie);
    },
    removeFromWishlist: (state, action) => {
      const { username, movie } = action.payload;
      if (state.wishlists[username]) {
        state.wishlists[username] = state.wishlists[username].filter(
          (m) => m.imdbID!== movie.imdbID
        );

        if (state.wishlists[username].length === 0) {
          delete state.wishlists[username]; // Delete the wishlist if it's empty
        }
      }
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
