import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';

// This is Root of the app

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className='pt-16 p-4'>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
