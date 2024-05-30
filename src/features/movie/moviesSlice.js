// features/movies/moviesSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getMovielist } from '../../api/movieApi';
import { toast } from 'react-toastify';

const initialState = {
  movieName: '',
  movieList: [],
  status: 'idle',
  error: null,
};

export const fetchMovies = createAsyncThunk('movies/fetchMovies', async (movieName) => {
  const response = await getMovielist(movieName);
  if(response.data.Error){
    toast.error(response.data.Error);
  }else{
    toast("Movies Fetched Successfully");
  }
  return response.data.Search;
});

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovieName: (state, action) => {
      state.movieName = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = 'loading';
        state.movieList = [];
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.movieList = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { setMovieName } = moviesSlice.actions;

export default moviesSlice.reducer;
