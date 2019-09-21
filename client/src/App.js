import React from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// pages
import HomePage from './pages/HomePage/HomePage';
import ListingDetailPage from './pages/ListingDetailPage/ListingDetailPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/listing/:id" component={ListingDetailPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
