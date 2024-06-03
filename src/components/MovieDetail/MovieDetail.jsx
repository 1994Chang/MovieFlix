import React, { useEffect, useState } from 'react'
import { getMovieDetail } from '../../api/movieApi';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { Grid, Typography } from '@mui/material';
import './movieDetail.css'
// import LoadingComponent from '../UI/Loader/Loader';
import { FallingLines } from 'react-loader-spinner'


const MovieDetail = () => {
  const [movieDetail, setMovieDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();

  const fetchMoviesDetail = async() =>{
    const response = await getMovieDetail(id)
    console.log(response)
    if(response.status == 200 ){
      toast.success("Successfuly get Movies Detail.");
      setMovieDetail(response.data);
      setIsLoading(true);
    }else{
      toast.error("Problem Wile fetching Movie Detail.");
      setIsLoading(true);
    }
    setIsLoading(true);
  }

  useEffect(()=>{
    fetchMoviesDetail();
  },[])
  return (
    <>
     {isLoading == false ? 
      <Grid container item xs={12} 
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
        }}
      >
          <FallingLines
            color="#e91616"
            width="100"
            visible={true}
            ariaLabel="falling-circles-loading"
          />
      </Grid>
      :
      <Grid container className='main_grid'>
        <Grid container spacing={0} >
            <Grid item xs={12} sm={6} md={4} lg={3} sx={{ maxHeight: '400px', overflow: 'hidden' }}>
              <img
                src={movieDetail?.Poster}
                alt={movieDetail?.Title}
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={8} lg={9} sx={{paddingLeft:'20px',textAlign:'left'}}>
              <Typography sx={{fontSize:'36px', color :'white', fontWeight:'900'}}>{movieDetail?.Title} </Typography>
              <Typography sx={{fontSize:'14px', color :'white', fontWeight:'300'}}>{movieDetail?.Genre} - {movieDetail?.Year}</Typography>
              <Typography sx={{fontSize:'18px', color :'white'}}>Director : {movieDetail?.Director}</Typography>
              <Typography sx={{fontSize:'18px', color :'white'}}>Actors : {movieDetail?.Actors}</Typography>
              <Typography sx={{fontSize:'18px', color :'white'}}>Language : {movieDetail?.Language}</Typography>
              <Typography sx={{fontSize:'18px', color :'white'}}>Runtime : {movieDetail?.Runtime}</Typography>
              <Typography sx={{fontSize:'18px', color :'white'}}>Writer : {movieDetail?.Writer}</Typography>
              <Typography sx={{fontSize:'18px', color :'white'}}>Country : {movieDetail?.Country}</Typography>
              <Typography sx={{fontSize:'18px', color :'white'}}>Awards : {movieDetail?.Awards}</Typography>
              <Typography sx={{fontSize:'18px', color :'white'}}>BoxOffice : {movieDetail?.BoxOffice}</Typography>
            </Grid>
        </Grid>
        <Grid container spacing={0} sx={{margin:'10px'}}>
          <Grid item xs={12}>
          <Typography sx={{fontSize:'14px', color :'white', fontWeight:'300'}}>{movieDetail?.Plot}</Typography>
          </Grid>
        </Grid>
      </Grid>
     }
    </>
  )
}

export default MovieDetail