import React, { Component } from 'react';
import './HomePage.scss';

export default class HomePage extends Component {
  render() {
    return (
      <main>
        <div className="container mx-auto font-sans">
          <h1 className="text-xl p-3">Matcha</h1>
        </div>
          <div className="flex-row w-24 justify-between">
            <a href="#">BUY</a>
            <a href="#">SELL</a>
          </div>
      </main>
    );
  }
}
