// MovieList.jsx
import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist } from '../../features/wishlist/wishlistSlice'; 
import { toast } from 'react-toastify';
import './movieList.css'
import posterImage from '../../asset/Movie_Poster.png'
import { useParams } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';

const MovieList = ({ movieList, wishlisted,movieName }) => {
  const movies = movieList || [];
  const dispatch = useDispatch();
  const wishlistState = useSelector(state => state.wishlist); 
  const { username } = useParams();
  const navigate = useNavigate();

  if (!Array.isArray(movies)) {
    console.error('Expected movies to be an array, but received:', movies);
    return <Typography variant="body1">Error: Unable to display movies. Please try again later.</Typography>;
  }

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    width: '100%',
    marginTop: '20px',
  };

  const handleCardClick = async(movie) =>{
    navigate(`/dashboard/movieDetail/${movie.imdbID}`);
  }

  const handleWishlistClick = (movie,event) => {
    event.stopPropagation();
    const userWishlist = wishlistState.wishlists[movieName];
    if (userWishlist && userWishlist.some(wishMovie => wishMovie.imdbID === movie.imdbID)) {
      toast.warning("Item is already available in your wishlist.");
    } else {
      dispatch(addToWishlist({ username: movieName,movie: movie }));
      toast.success("Item is Added Succesfuly in  your wishlist.");
    }
  };

  const handleRemoveWishlistClick = (movie,event) => {
    event.stopPropagation();
    dispatch(removeFromWishlist({username: username,movie: movie }));
    toast.success("Item is removes Successfuly from your wishlist.");
  };

  return (
    <>
    <div style={gridStyle}>
      {movies.map((movie, index) => (
        <Card key={movie.imdbID || index}  className='movie-card' onClick={() => handleCardClick(movie)}>
          {!wishlisted && (
            <div class="absolute top-0 left-0 rounded-br-md">
              <IconButton aria-label="add to Wishlist" onClick={(event) => handleWishlistClick(movie,event)} className='icon-btn'>
                <BookmarkAddIcon 
                className={
                  wishlistState.wishlists[movieName]?.some(wishMovie => wishMovie.imdbID === movie.imdbID)
                  ? 'bookmark-active' 
                  : 'bookmark-inactive'
                }
                />
              </IconButton>
            </div>
          )}
          {wishlisted && (
            <div class="absolute top-4 right-4">
              <IconButton aria-label="remove from Wishlist" onClick={(event) => handleRemoveWishlistClick(movie,event)} className='icon-btn'>
                <DoneAllIcon className='done-icon' />
              </IconButton>
            </div>
          )}
          <CardMedia
            className='cardImageCover'
            component="img"
            image={movie.Poster === 'N/A' ? posterImage : movie.Poster}
            alt={movie.Title}
          />
          <div className="card-gradient-shadow">
            <CardContent class="absolute bottom-4 left-4" className="CardContent">
              <Typography gutterBottom variant="h5" component="div"  className='movie-title'>
                {movie.Title}
              </Typography>
              <Typography variant="body1" className='movie-year'>
                 {movie.Year}
              </Typography>
            </CardContent>
          </div>
        </Card>
      ))}
    </div>
    </>
  );
};

export default MovieList;
