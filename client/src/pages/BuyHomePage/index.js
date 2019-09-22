import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./HomePage.scss";

// Componenets
import Recommended from "../../components/Recommended";
import ItemList from "../../components/ItemList";
import LogoBox from "../../components/LogoBox";

export default class HomePage extends Component {
  render() {
    return (
      <main className="mx-4 main-container">
        <div className="container mx-auto font-sans">
          <div className="flex flex-row justify-center h-16 items-center">
            <LogoBox></LogoBox>
          </div>
        </div>
        <div className="flex flex-row w-24 justify-between m-auto">
          <a href="#">BUY</a>
          <Link to="sell/current">SELL</Link>
        </div>
        <Recommended />
        <ItemList />
      </main>
    );
  }
}
