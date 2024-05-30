// components/UI/SidebarMenu.jsx
import React from 'react';
import { Box, IconButton, Typography, Stack, OutlinedInput, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import ListIcon from '@mui/icons-material/List';
import MovieIcon from '@mui/icons-material/Movie';
import Divider from '@mui/material/Divider';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import './SidebarMenu.css';
import { NavLink } from 'react-router-dom';
import CloseIcon from '@mui/icons-material/Close';
import { useSelector } from 'react-redux';
import logo from '../../asset/MovieFlix-logo.png';
import logoIcon from '../../asset/MovieFlix_icon.png'
import Profile from './Profile';

const SidebarMenu = ({ isOpen, toggleSidebar }) => {
  const wishlists = useSelector((state) => state.wishlist.wishlists);
  const validWishlists = Object.entries(wishlists).filter(([_, movies]) => Array.isArray(movies) && movies.length > 0);
  const userName = useSelector((state) => state.auth.user.name);  
  return (
    <Sidebar className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <Box class="flex justify-between items-center p-2 " >
        {isOpen && 
         <img 
          src={logo}
          width='100%'
          alt="logo"
          height='25px'
          class="mt-4"
         /> 
        }
        {!isOpen && 
         <img 
          src={logoIcon}
          width='100%'
          alt="logo"
          height='25px'
          class="mt-4"
         /> 
         }
        
      </Box>
        <div class="absolute top-0 right-0 z-10">
          <IconButton onClick={toggleSidebar}>
            {isOpen ? <CloseIcon /> : < MenuIcon/>}
          </IconButton>
        </div>
      <Menu className="menu">
        {isOpen && (
          <OutlinedInput
            id="outlined-adornment-search"
            type="text"
            sx={{ width: '95%', height: '40px', margin: '8px' }}
            startAdornment={
              <InputAdornment position="start">
                <IconButton edge="start">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            }
          />
        )}

        <MenuItem className={isOpen ? '' : 'collapsed'}>
          <NavLink to="/dashboard" className="menu-link">
            <Stack direction="row" alignItems="center">
              <HomeIcon sx={{ marginRight: 1 }} />
              {isOpen && <Typography variant="body1">Home</Typography>}
            </Stack>
          </NavLink>
        </MenuItem>

        <Divider sx={{ width: '95%' }} />

        <MenuItem className={isOpen ? '' : 'collapsed'}>
            <Stack direction="row" alignItems="center">
              <ListIcon sx={{ marginRight: 1 }} />
              {isOpen && <Typography variant="subtitle1">My List</Typography>}
            </Stack>
        </MenuItem>
        {
          validWishlists.map(([movieName, movies]) => (
            <MenuItem className={isOpen ? '' : 'collapsed'}>
              <NavLink key={movieName} to={`/dashboard/${movieName}`} className="sub-menu-link">
                <Stack direction="row" alignItems="center">
                  <MovieIcon sx={{ marginRight: 1 }} />
                  {isOpen && <Typography variant="subtitle1">{movieName}</Typography>}
                </Stack>
              </NavLink>
            </MenuItem>
          ))
        }
      </Menu>
      <Profile userName={userName} isOpen={isOpen}/>
    </Sidebar>
  );
};

export default SidebarMenu;