
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
      const updatedWishlists = { ...state.wishlists };
    
      if (!updatedWishlists[movieName]) {
        updatedWishlists[movieName] = [];
      }
    
      const movieExists = updatedWishlists[movieName].some(
        (m) => m.imdbID === movie.imdbID
      );
    
      if (!movieExists) {
        updatedWishlists[movieName] = [...updatedWishlists[movieName], movie];
      }
    
      return {
        ...state,
        wishlists: updatedWishlists,
      };
    },
removeFromWishlist: (state, action) => {
  const { movieName, movie } = action.payload;
  const updatedWishlists = { ...state.wishlists };

  if (updatedWishlists[movieName]) {
    updatedWishlists[movieName] = updatedWishlists[movieName].filter(
      (m) => m.imdbID !== movie.imdbID
    );

    if (updatedWishlists[movieName].length === 0) {
      delete updatedWishlists[movieName];
    }
  }

  return {
    ...state,
    wishlists: updatedWishlists,
  };
},
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;