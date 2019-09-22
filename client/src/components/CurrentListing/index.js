import React, { Component } from "react";
import { Link } from "react-router-dom";

export class CurrentListing extends Component {
  render() {
    return (
      <div>
        Current Listing
        <ul className="recommended-list">
          <li className="recommended-list__item rounded brocolli">
            <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
              <div className="flex flex-row justify-between mb-4">
                <p className="text-white">Brocolli</p>
                <p className="text-white pr-1">$0.56/lb</p>
              </div>
              <p className="absolute bottom-0 text-xs mb-1">Honeyfield Farms</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CurrentListing;
