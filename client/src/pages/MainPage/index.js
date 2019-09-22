import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import Navigationbar from "../../components/NavigationBar";

import BuyHomePage from "../BuyHomePage";
import ListingDetailPage from "../ListingDetailPage";
import AddNewListing from "../AddNewListing";

export default class MainPage extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/buy/:id" component={ListingDetailPage}></Route>
          <Route exact path="/sell/add" component={AddNewListing}></Route>
          <Route path="/sell/:id" component={<></>}></Route>
          <Route path="/sell" component={<></>}></Route>
          <Route path="/buy" component={BuyHomePage}></Route>
        </Switch>
        <Navigationbar />
      </>
    );
  }
}
