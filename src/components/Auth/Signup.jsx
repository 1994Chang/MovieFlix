// components/Auth/Signup.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login, signup } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import Input from '../UI/Input';
import Buttons from '../UI/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 
import BgImage from '../../asset/background-main.jpg'
import logo from '../../asset/MovieFlix-logo.png'

const Signup = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');

  const [emailError, setEmailError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email)) {
      const userData = { email,name };
      dispatch(signup(userData));
      setEmail('');
      setEmailError('');
      navigate('/login');
    } else {
      setEmailError('Please enter a valid email address');
    }
  };

  return (
    <Box 
      sx={{
        position: 'relative',
        height: '100vh',
        '::before': {
          content: '" "',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${BgImage})`,
          backgroundSize: 'cover',
          opacity: 0.7,
        },
      }}
    >
      <Box className="flex justify-center items-center h-screen" >
        <Card sx={{ minWidth: 375, marginLeft: 'auto', marginRight: 'auto', marginTop: '20px',zIndex:'1000' }}>
          <img 
            src={logo}
            width='100%'
            height='25px'
            class="mt-4"
          /> 
            <CardContent>
                {/* <Typography class="text-center">Signup</Typography> */}
                <form onSubmit={handleSubmit}>
                    <Input
                      placeholder="Enter Your Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{ width: "100%",marginBottom:'5px' }}
                    />
                      {emailError && <p>{emailError}</p>}
                    <Input
                      placeholder="Enter Your Name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      sx={{ width: "100%" }}
                    />
                    <div class="text-center mt-2">
                      <Buttons type="submit">Signup</Buttons>
                    </div>
                </form>
            </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Signup;
