import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "./SellHomePage.scss";

// components
import NavBar from "../../components/navbar";

// pages
import CurrentListing from "../../components/CurrentListing";
import SoldItems from "../../components/SoldItems";

export class SellHomePage extends Component {
  render() {
    console.log(this.props);

    return (
      <>
        <section className="px-4">
          <div className="container mx-auto font-sans">
            <div className="flex flex-row justify-center h-16 items-center">
              <svg
                width="20"
                height="18"
                viewBox="0 0 20 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 0H10C15.5228 0 20 4.47715 20 10V18H10C4.47715 18 0 13.5228 0 8V0Z"
                  fill="#699472"
                />
              </svg>
              <h1 className="text-xl header ml-2">Matcha</h1>
            </div>
          </div>
          <div className="flex flex-row w-24 justify-between m-auto">
            <Link to={`${this.props.match.path}`}>Current</Link>
            <Link to={`${this.props.match.path}/sold`}>Sold</Link>
          </div>
          <h2 className="text-xl font-bold ">Your Listings</h2>
          <Switch>
            <Route
              path={`${this.props.match.path}/sold`}
              component={SoldItems}
            />
            <Route component={CurrentListing} />
          </Switch>
        </section>
        <NavBar />
      </>
    );
  }
}

export default SellHomePage;
