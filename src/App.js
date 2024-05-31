// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import useAuth from './components/Auth/useAuth';
import DashboardLayout from './components/UI/DashboardLayout';
import Home from './components/Home/Home';
import Wishlist from './components/Wishlist/Wishlist';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieDetail from './components/MovieDetail/MovieDetail';

const App = () => {
  const { isLoggedIn, user } = useAuth();

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Navigate to="/signup" />} />
          <Route path="/login" element={<Login user={user} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={isLoggedIn ? <DashboardLayout /> : <Navigate to="/signup" />}>
            <Route path="" element={<Home user={user} />} />
            <Route path="/dashboard/:username" element={<Wishlist/>} />
            <Route path="/dashboard/movieDetail/:id" element={<MovieDetail/>} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer
      position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        newestOnTop
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </>
  );
};

export default App;
