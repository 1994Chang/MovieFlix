// components/UI/Button.jsx
import React from 'react';
import Button from '@mui/material/Button';
import './Button.css';

const Buttons = ({ children, ...props }) => {
  return <Button className='btn' {...props} variant="contained" >{children}</Button>;
};

export default Buttons;