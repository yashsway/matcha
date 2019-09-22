import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import authManager from '../../utilities/auth';

import Navigationbar from "../../components/NavigationBar";

import BuyHomePage from "../BuyHomePage";
import ListingDetailPage from "../ListingDetailPage";
import AddNewListing from "../AddNewListing";
import Checkout from "../../components/Checkout"

export default class MainPage extends Component {
  componentDidMount() {
    authManager.checkIfAuthenticated((secondsLeft) => {
      if (!secondsLeft) {
        this.props.history.push("/");
      }
    });
  }

  render() {
    return (
      <>
        <Switch>
          <Route path="/buy/:id/checkout" component={Checkout}></Route>
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
