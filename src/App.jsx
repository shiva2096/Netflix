import React from 'react';
import './app.scss'
import Home from './pages/home/Home';
import Watch from './pages/watch/Watch';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
  <Routes>
    <Route path="/" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/watch" element={<Watch />} />
    <Route path="/home" element={<Home />} />
  </Routes>
    );
}

export default App;
