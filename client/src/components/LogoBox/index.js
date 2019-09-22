import React, { Component } from 'react';
import logo from '../../assets/icons/matcha.svg';

export default class LogoBox extends Component {
  render() {
    return (
      <div className="flex logo-box">
        <img src={logo} alt="Matcha logo"/>
        <h1 className="text-xl text-matcha ml-2">Matcha</h1>
      </div>
    )
  }
}
