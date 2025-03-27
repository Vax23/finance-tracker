import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './pages/Dashboard';

// This is Root of the app

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Dashboard />
      </header>
    </div>
  );
}

export default App;
