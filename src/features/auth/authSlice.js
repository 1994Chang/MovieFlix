// features/auth/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isLoggedIn: false,
  user: {
    email:null,
    name:null
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    signup: (state, action) => {
      state.isLoggedIn = true;
      state.user.email = action.payload.email;
      state.user.name = action.payload.name;

    },
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user.email = action.payload.email;

    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user.email = null;
      state.user.name = null;
    },
  },
});

export const { login, logout ,signup} = authSlice.actions;
export default authSlice.reducer;