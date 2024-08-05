import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Pages/Home';
import Nutrition from './components/Pages/Nutrition';
import Coaching from './components/Pages/Coaching';
import SignUp from './components/Pages/SignUp';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/nutrition' element={<Nutrition />} />
          <Route path='/coaching' element={<Coaching />} />
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
