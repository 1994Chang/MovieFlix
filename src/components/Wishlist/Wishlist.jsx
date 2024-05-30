import { Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import MovieList from '../MovieList/MovieList';
import { useParams } from 'react-router-dom';

const Wishlist = () => {
  const wishlists = useSelector((state) => state.wishlist.wishlists);
  const movieName = useSelector((state) => state.movies.movieName);

  const { username } = useParams();

  const wishlistItems = wishlists[username] || [];

  return (
    <div>
      <h2>Wishlist for {username}</h2>
      <Grid container alignItems="center">
        <Grid item xs>
          <MovieList movieList={wishlistItems} wishlisted={true} movieName={movieName}/>
        </Grid>
      </Grid>
    </div>
  );
};

export default Wishlist;