import React from 'react';
import NavBar from './components/navbar/NavBar';
import './css/App.css';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
