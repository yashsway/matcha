import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage/HomePage';

// Nav Bar
import Navbar from "./components/navbar"

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
      </Switch>
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
