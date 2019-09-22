import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// components

// pages
import LoginPage from './pages/LoginPage';
import MainPage from './pages/MainPage';
import SellHomePage from "./pages/SellHomePage"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LoginPage}></Route>
        <Route path="/sell" component={SellHomePage}></Route>
        <Route path="/" component={MainPage}></Route>
        {/* TODO: 404 here. */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
