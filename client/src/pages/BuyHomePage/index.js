import React, { Component } from "react";
import "./HomePage.scss";

// Componenets
import Recommended from "../../components/Recommended/";
import ItemList from "../../components/ItemList";

export default class HomePage extends Component {
  render() {
    return (
      <main className="mx-4 main-container">
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
          <a href="#">BUY</a>
          <a href="#">SELL</a>
        </div>
        <Recommended />
        <ItemList />
      </main>
    );
  }
}
