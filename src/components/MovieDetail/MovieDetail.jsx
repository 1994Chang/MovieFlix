import React, { useEffect, useState } from 'react'
import { getMovieDetail } from '../../api/movieApi';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';

const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const { id } = useParams();

  const fetchMoviesDetail = async() =>{
    const response = await getMovieDetail(id)
    console.log(response)
    if(response.status == 200 ){
      toast.success("Successfuly get Movies Detail.");
      setMovieDetail(response.data);
    }else{
      toast.error("Problem Wile fetching Movie Detail.");
    }
  }

  useEffect(()=>{
    fetchMoviesDetail();
  },[])
  return (
    <>
     <Grid container spacing={0} >
      <Grid item xs={12} sm={6} md={4} lg={3} sx={{ maxHeight: 'auto', overflow: 'hidden' }}>
        <img
          src={movieDetail?.Poster}
          alt={movieDetail?.Title}
          style={{ objectFit: 'cover', width: '100%', height: '100%' }}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={8} lg={9} >
        <Typography sx={{color :'white'}}>{movieDetail?.Title} </Typography>
      </Grid>
    </Grid>
    </>
  )
}

export default MovieDetail