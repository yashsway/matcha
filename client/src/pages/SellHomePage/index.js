import React, { Component } from "react";
import { Link, Switch, Route, NavLink } from "react-router-dom";
import "./style.scss";
import addBtn from "../../assets/icons/plus.svg";

// components
import NavigationBar from "../../components/NavigationBar";

// pages
import CurrentListing from "../../components/CurrentListing";
import SoldItems from "../../components/SoldItems";

export class SellHomePage extends Component {
  render() {
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
          <h2 className="text-2xl font-bold mb-4">Your Listings</h2>
          <div className="flex flex-row w-40 justify-between m-auto pb-6">
            <NavLink
              activeClassName="sell-active"
              className="text-xl"
              exact
              to={`${this.props.match.path}`}
            >
              Current
            </NavLink>
            <NavLink
              activeClassName="sell-active"
              className="text-xl"
              to={`${this.props.match.path}/sold`}
            >
              Sold
            </NavLink>
          </div>
          <Link to="/sell/add">
          <div className="add-btn h-16 w-16 rounded-full flex align-middle justify-center">
            <img className="w-5" src={addBtn} alt="Plus Icon" />
          </div>
          </Link>
          <Switch>
            <Route
              path={`${this.props.match.path}`}
              exact
              component={CurrentListing}
            />
            <Route
              path={`${this.props.match.path}/sold`}
              component={SoldItems}
            />
            />
          </Switch>
        </section>
        <NavigationBar />
      </>
    );
  }
}

export default SellHomePage;
