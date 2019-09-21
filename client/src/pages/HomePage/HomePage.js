import React, { Component } from 'react';
import './HomePage.scss';

export default class HomePage extends Component {
  render() {
    return (
      <main className="bg-green-200">
        <div className="container min-h-screen mx-auto font-sans">
          <h1 className="text-6xl font-bold">Matcha</h1>
        </div>
      </main>
    );
  }
}
