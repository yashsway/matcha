import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Navigationbar from "../../components/NavigationBar";

import BuyHomePage from '../BuyHomePage';
import ListingDetailPage from '../ListingDetailPage';

export default class MainPage extends Component {
  render() {
    return <>
      <Route path="/buy/:id" component={ListingDetailPage}></Route>
      <Route path="/buy" component={BuyHomePage}></Route>
      <NavigationBar />
    </>;
  }
}
