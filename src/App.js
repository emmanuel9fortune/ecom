import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import Candi from './Candi';
import Profile from './Profile';
import Register from './Register';
import Login from './Login';
import Terms from './Terms';

function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/votes' element={<Candi/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/terms' element={<Terms/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </Router> 
  );
}

export default App;
