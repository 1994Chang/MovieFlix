// components/Auth/Login.jsx
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../features/auth/authSlice';
import Input from '../UI/Input';
import Buttons from '../UI/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box'; 
import BgImage from '../../asset/background-main.jpg'
import logo from '../../asset/MovieFlix-logo.png'

const Login = ({ user }) => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailPattern.test(email) && email === user.email) {
      const userData = { email };
      dispatch(login(userData));
      setEmail('');
      setEmailError('');
      navigate('/dashboard');
    } else {
      setEmailError('Please enter a valid and registered email address');
    }
  };

  return (
    <Box sx={{ backgroundImage: `url(${BgImage})`, height: '100vh' }}>
        <Box class="flex justify-center items-center h-screen" >
          <Card sx={{ maxWidth: 275, marginLeft: 'auto', marginRight: 'auto', marginTop: '20px' }}>
            <img 
                src={logo}
                width='100%'
                alt='logo'
                height='25px'
                class="mt-4"
              /> 
              <CardContent>
              {/* <Typography sx={{ fontSize: 32, textAlign: 'center' }}>Login</Typography> */}
              <form onSubmit={handleSubmit}>
                  <Input
                      placeholder="Enter Your Email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      sx={{ width: "100%" }}
                  />
                  {emailError && <p>{emailError}</p>}
                  <div class="text-center mt-2">
                    <Buttons type="submit">Login</Buttons>
                  </div>
              </form>
              </CardContent>
          </Card>
        </Box>
    </Box>
  );
};

export default Login;
