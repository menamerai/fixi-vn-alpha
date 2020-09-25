import React from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import './css/App.css';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavBar />
        <Route exact path="/">
          <HomePage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
