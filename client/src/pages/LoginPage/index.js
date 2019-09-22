import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../components/Button';

export default class LoginPage extends Component {
  render() {
    return (
      <div>
        This is the login page.
        <Link to="/buy">
          <Button>Login</Button>
        </Link>
      </div>
    )
  }
}
