// // features/wishlist/wishlistSlice.js
// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   wishlist: [],
// };

// const wishlistSlice = createSlice({
//   name: 'wishlist',
//   initialState,
//   reducers: {
//     addToWishlist: (state, action) => {
//       state.wishlist.push(action.payload);
//     },
//     removeFromWishlist: (state, action) => {
//       state.wishlist = state.wishlist.filter(movie => movie.imdbID !== action.payload.imdbID);
//     },
//   },
// });

// export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
// export default wishlistSlice.reducer;
// features/wishlist/wishlistSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  wishlists: {}, // Initialize wishlists as an empty object
};

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      const { movieName, movie } = action.payload;
      if (!state.wishlists[movieName]) {
        state.wishlists[movieName] = []; // Initialize the array if it doesn't exist
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