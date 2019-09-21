import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        This is the login page.
        <Link to="/buy">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Login</button>
        </Link>
      </div>
    )
  }
}
