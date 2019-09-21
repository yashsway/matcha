import React, { Component } from "react";
import "./ItemList.scss";

export class ItemList extends Component {
  render() {
    return (
      <div className="mt-4">
        <h2 className="text-base mb-4">All Items</h2>
        <ul className="mb-24">
          <li className="h-24 mb-4 relative item-card">
            <p className="absolute bottom-0 pb-1 pl-2 text-white">Red Peppers</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default ItemList;
