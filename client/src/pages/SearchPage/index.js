import React, { Component } from "react";
import "./style.scss";

export class index extends Component {
  render() {
    return (
      <div className="flex flex-col items-center">
        <h2 className="my-6 " >Search</h2>
        <input className="mainSearch" type="text" placeholder="Search!" />
        <ul className="my-6">
            <li className="mb-4">Broccoli</li>
            <li className="mb-4">Durians</li>
            <li className="mb-4">Carrots</li>
            <li className="mb-4">Apples</li>
            <li className="mb-4">Bok Choy</li>
            <li className="mb-4">Red peppers</li>
            <li className="mb-4">Tomatoes</li>
        </ul>
      </div>
    );
  }
}

export default index;
