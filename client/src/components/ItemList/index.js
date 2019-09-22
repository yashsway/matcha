import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
import data from "../../data/seed";

export class ItemList extends Component {
  render() {
    return (
      <div className="mt-4">
        <div className="flex flex-row justify-between">
          <h2 className="text-base mb-4">All Items</h2>
          <p className="text-xs text-gray-600">Newest to oldest</p>
        </div>
        <ul className="mb-2">
          <Link to={`buy/broccoli`}>
            <li className="h-32 mb-4 relative item-card rounded brocolli-item">
              <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
                <div className="flex flex-row justify-between mb-4">
                  <p className="text-white">Broccoli</p>
                  <p className="text-white pr-1">$0.56/lb</p>
                </div>
                <p className="absolute bottom-0 text-xs mb-1">
                  Honeyfield Farms
                </p>
              </div>
            </li>
          </Link>
          <Link to={`buy/red-peppers`}>
            <li className="h-32 mb-4 relative item-card rounded red-peppers-item">
              <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
                <div className="flex flex-row justify-between mb-4">
                  <p className="text-white">Red Peppers</p>
                  <p className="text-white pr-1">$0.56/lb</p>
                </div>
                <p className="absolute bottom-0 text-xs mb-1">
                  Honeyfield Farms
                </p>
              </div>
            </li>
          </Link>
          <Link to={`buy/potatoes`}>
            <li className="h-32 mb-4 relative item-card rounded potatoes-item">
              <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
                <div className="flex flex-row justify-between mb-4">
                  <p className="text-white">Potatoes</p>
                  <p className="text-white pr-1">$0.56/lb</p>
                </div>
                <p className="absolute bottom-0 text-xs mb-1">
                  Honeyfield Farms
                </p>
              </div>
            </li>
          </Link>
          <Link to={`buy/carrots`}>
            <li className="h-32 mb-4 relative item-card rounded carrots-item">
              <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
                <div className="flex flex-row justify-between mb-4">
                  <p className="text-white">Carrots</p>
                  <p className="text-white pr-1">$0.56/lb</p>
                </div>
                <p className="absolute bottom-0 text-xs mb-1">
                  Honeyfield Farms
                </p>
              </div>
            </li>
          </Link>
          <Link to={`buy/bokchoy`}>
            <li className="h-32 mb-24 relative item-card rounded bok-choy-item">
              <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
                <div className="flex flex-row justify-between mb-4">
                  <p className="text-white">Bok Choy</p>
                  <p className="text-white pr-1">$0.56/lb</p>
                </div>
                <p className="absolute bottom-0 text-xs mb-1">
                  Honeyfield Farms
                </p>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    );
  }
}

export default ItemList;
