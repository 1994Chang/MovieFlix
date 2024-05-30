// components/UI/Home.jsx
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, InputAdornment, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Input from '../UI/Input';
import Buttons from '../UI/Button';
import MovieList from '../MovieList/MovieList';
import { fetchMovies, setMovieName } from '../../features/movie/moviesSlice';
import { toast } from 'react-toastify';

const Home = () => {
  const dispatch = useDispatch();
  const movieName = useSelector((state) => state.movies.movieName);
  const movieList = useSelector((state) => state.movies.movieList);
  const status = useSelector((state) => state.movies.status);

  // useEffect(() => {
  //   if (movieName) {
  //     dispatch(fetchMovies(movieName));
  //   }
  // }, [dispatch, movieName]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieName) {
      dispatch(fetchMovies(movieName));
    } else{
      toast.error('please enter movie name');
    }
  };

  return (
    <>
      <Typography class='text-3xl mb-5 text-gray-600'>Welcome to the MovieFlix</Typography>
      <div>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs>
              <Input
                placeholder="Enter movie Name"
                type="text"
                value={movieName}
                onChange={(e) => dispatch(setMovieName(e.target.value))}
                fullWidth
                startAdornment={
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                }
              />
            </Grid>
            <Grid item >
              <Buttons type="submit">Search</Buttons>
            </Grid>
          </Grid>
        </form>
      </div>
      <Grid container alignItems="center" >
        <Grid item xs sx={{marginTop:'20px'}}>
          {status === 'loading' && <Typography>Loading...</Typography>}
          {status === 'failed' && <Typography>Error fetching movies</Typography>}
          {status !== 'loading' && movieList && (
            <>
              {movieList.length > 0 ? (
                <MovieList movieList={movieList} wishlisted={false} movieName={movieName} />
              ) : (
                <Typography>No movies found. Please try a different search.</Typography>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
