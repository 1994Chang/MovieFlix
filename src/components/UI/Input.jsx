// components/UI/Input.jsx
import React from 'react';
import TextField from '@mui/material/TextField';
import './input.css'
const Input = ({ label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <TextField id="outlined-basic" className='input-search'  variant="outlined" color='error'  {...props} />
    </div>
  );
};

export default Input;