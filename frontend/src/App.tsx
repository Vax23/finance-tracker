import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Register from './pages/Register';

// This is Root of the app

function App() {
  return (
    
    <Router>
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className='pt-16 p-4'>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
    </Router>
 
  );
}

export default App;
