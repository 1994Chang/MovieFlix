// components/UI/DashboardLayout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';
import SidebarMenu from '../UI/SidebarMenu';

const DashboardLayout = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <div class="flex h-screen" >
      <Box
        component="nav"
        sx={{
          width: isSidebarOpen ? '250px' : '60px',
          transition: 'width 0.3s',
        }}
      >
        <SidebarMenu isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </Box>
      <Box
        component="main"
        className='main-content-area'
        sx={{
          flexGrow: 1,
          padding: 6,
        }}
      >
        <Outlet />
      </Box>
    </div>
  );
};

export default DashboardLayout;