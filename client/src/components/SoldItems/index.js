import React, { Component } from "react";
import "./style.scss";

export class SoldItem extends Component {
  redirectToDetails = (id) => {
    this.props.history.push(`../sell/details/${id}`);
  }

  render() {
    return (
      <>
        <ul className="mb-2">
          <li className="h-32 mb-6 relative item-card rounded tomatoes-sell" onClick={() => this.redirectToDetails('tomatoes')}>
            <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
              <div className="flex flex-row justify-between mb-4">
                <p className="text-white">Tomatoes</p>
                <p className="text-white pr-1">$0.85/lb</p>
              </div>
              <p className="absolute bottom-0 text-xs mb-1">Honeyfield Farms</p>
            </div>
          </li>
          <li className="h-32 mb-6 relative item-card rounded potatoes-sell" onClick={() => this.redirectToDetails('potatoes')}>
            <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
              <div className="flex flex-row justify-between mb-4">
                <p className="text-white">Potatoes</p>
                <p className="text-white pr-1">$0.12/lb</p>
              </div>
              <p className="absolute bottom-0 text-xs mb-1">Honeyfield Farms</p>
            </div>
          </li>
          <li className="h-32 mb-6 relative item-card rounded carrots-sell" onClick={() => this.redirectToDetails('carrots')}>
            <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
              <div className="flex flex-row justify-between mb-4">
                <p className="text-white">Carrots</p>
                <p className="text-white pr-1">$1.22/lb</p>
              </div>
              <p className="absolute bottom-0 text-xs mb-1">Honeyfield Farms</p>
            </div>
          </li>
          <li className="h-32 mb-24 relative item-card rounded brocolli-sell" onClick={() => this.redirectToDetails('broccoli')}>
            <div className="absolute bottom-0 text-white pb-1 pl-2 w-full">
              <div className="flex flex-row justify-between mb-4">
                <p className="text-white">Broccoli</p>
                <p className="text-white pr-1">$0.56/lb</p>
              </div>
              <p className="absolute bottom-0 text-xs mb-1">Honeyfield Farms</p>
            </div>
          </li>
        </ul>
      </>
    );
  }
}

export default SoldItem;
