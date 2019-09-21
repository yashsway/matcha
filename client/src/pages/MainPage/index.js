import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

import NavBar from "../../components/navbar/index.js";

import BuyHomePage from "../BuyHomePage";
import ListingDetailPage from "../ListingDetailPage";

export default class MainPage extends Component {
  render() {
    return (
      <>
        <Switch>
          <Route path="/buy/:id" component={ListingDetailPage}></Route>
          <Route path="/buy" component={BuyHomePage}></Route>
        </Switch>
        <NavBar />
      </>
    );
  }
}
