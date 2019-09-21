import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import NavBar from "../../components/NavBar";

import BuyHomePage from '../BuyHomePage';
import ListingDetailPage from '../ListingDetailPage';

export default class MainPage extends Component {
  render() {
    return <>
      <Route path="/buy" component={BuyHomePage}></Route>
      <Route path="/buy/:id" component={ListingDetailPage}></Route>
      <NavBar />
    </>;
  }
}
