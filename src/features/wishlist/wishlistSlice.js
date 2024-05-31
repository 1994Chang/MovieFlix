
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
        const updatedWishlist = state.wishlists[movieName].filter(
          (m) => m.imdbID !== movie.imdbID
        );
        return {
          ...state,
          wishlists: {
            ...state.wishlists,
            [movieName]: updatedWishlist,
          },
        };
      }
      return state;
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;