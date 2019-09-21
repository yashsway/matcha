import React, { Component } from "react";
import "./navbar.scss";

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="bg-white min-w-full	 navbar" >
				<ul className="flex flex-row justify-around">
					<li className="flex flex-col items-center w-10">
						<div className="bg-gray-500 w-8 h-8 rounded-full"></div>
						<p className="text-xs">Buy</p>
					</li>
					<li className="flex flex-col items-center w-10">
						<div className="bg-gray-500 w-8 h-8 rounded-full"></div>
						<p className="text-xs">Sell</p>
					</li>
					<li className="flex flex-col items-center w-10">
						<div className="bg-gray-500 w-8 h-8 rounded-full"></div>
						<p className="text-xs">Search</p>
					</li>
					<li className="flex flex-col items-center w-10">
						<div className="bg-gray-500 w-8 h-8 rounded-full"></div>
						<p className="text-xs">Profile</p>
					</li>
				</ul>
      </div>
    );
  }
}
