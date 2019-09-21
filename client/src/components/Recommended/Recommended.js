import React, { Component } from "react";
import "./Recommended.scss";

export class Recommended extends Component {
  render() {
    return (
      <div className="mt-4">
        <h2 className="text-xl font-bold ">Marketplace</h2>
        <div className="flex flex-row justify-between">
          <h4>Recommended</h4>
          <h6 className="text-xs">See All</h6>
        </div>
        <ul className="recommended-list">
          <li className="recommended-list__item">
            <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
              <div className="flex flex-row justify-between mb-4">
                <p className="text-white">
                  Brocolli
                </p>
                <p className="text-white pr-1">
                  $0.56/lb
                </p>
              </div>
              <p className="absolute bottom-0 text-xs mb-1">Honeyfield Farms</p>
            </div>
          </li>
          <li className="recommended-list__item">
            <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
              <div className="flex flex-row justify-between mb-4">
                <p className="text-white">
                  Brocolli
                </p>
                <p className="text-white pr-1">
                  $0.56/lb
                </p>
              </div>
              <p className="absolute bottom-0 text-xs mb-1">Honeyfield Farms</p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default Recommended;
