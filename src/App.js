import React from 'react';
import NavBar from './components/NavBar';
import NavDrawer from './components/Drawer';
import HomePage from './components/HomePage';
import './css/App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Media from 'react-media';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/*<NavBar />*/}
        <Media queries={{
          mobile: '(max-width: 849px)',
          desktop: '(min-width: 850px)'
        }}>
          {matches => (
            <React.Fragment>
              {matches.mobile && <NavDrawer />}
              {matches.desktop && <NavBar />}
            </React.Fragment>
          )}
        </Media>
        <Route exact path="/">
          <HomePage />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
