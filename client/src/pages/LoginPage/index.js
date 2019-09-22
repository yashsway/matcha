import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Button from '../../components/Button';

export default class LoginPage extends Component {
  componentDidMount() {}

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
