import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components

// pages
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={LoginPage}></Route>
        <Route path="/" component={MainPage}></Route>
        {/* TODO: 404 here. */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
