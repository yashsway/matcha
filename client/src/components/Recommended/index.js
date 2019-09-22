import React, { Component } from "react";
import { Link } from "react-router-dom"
import "./style.scss";

export class Recommended extends Component {
  render() {
    return (
      <div className="mt-4">
        <h2 className="text-xl font-bold ">Eco Marketplace</h2>
        <div className="flex flex-row justify-between">
          <h4>Recommended</h4>
          <h6 className="text-xs">See All</h6>
        </div>
        <ul className="recommended-list">
          <Link to={`buy/1212`}>
          <li className="recommended-list__item rounded brocolli">
            <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
              <div className="flex flex-row justify-between mb-4">
                <p className="text-white">Broccoli</p>
                <p className="text-white pr-1">$0.56/lb</p>
              </div>
              <p className="absolute bottom-0 text-xs mb-1">Honeyfield Farms</p>
            </div>
          </li>
          </Link>
          <Link to={`buy/1212`}>
          <li className="recommended-list__item rounded bok-choy">
            <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
              <div className="flex flex-row justify-between mb-4">
                <p className="text-white">Bok Choy</p>
                <p className="text-white pr-1">$1.02/lb</p>
              </div>
              <p className="absolute bottom-0 text-xs mb-1">Honeyfield Farms</p>
            </div>
          </li>
          </Link>
          <li className="recommended-list__item rounded carrots">
            <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
              <div className="flex flex-row justify-between mb-4">
                <p className="text-white">Carrots</p>
                <p className="text-white pr-1">$0.56/lb</p>
              </div>
              <p className="absolute bottom-0 text-xs mb-1">Honeyfield Farms</p>
            </div>
          </li>
          <li className="recommended-list__item rounded potatoes">
            <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
              <div className="flex flex-row justify-between mb-4">
                <p className="text-white">Potatoes</p>
                <p className="text-white pr-1">$0.56/lb</p>
              </div>
              <p className="absolute bottom-0 text-xs mb-1">Honeyfield Farms</p>
            </div>
          </li>
          <li className="recommended-list__item rounded red-peppers">
            <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
              <div className="flex flex-row justify-between mb-4">
                <p className="text-white">Red Pepper</p>
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

export default Recommended;
