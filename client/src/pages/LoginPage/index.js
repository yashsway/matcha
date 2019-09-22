import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';
import Button from '../../components/Button';
import LogoBox from '../../components/LogoBox';
import TextInput from '../../components/TextInput';
import defData from '../../data/seed';
import authManager from '../../utilities/auth';

export default class LoginPage extends Component {
  componentDidMount() {
    authManager.checkIfAuthenticated((secondsLeft) => {
      if (secondsLeft) {
        this.props.history.push('/buy');
      }
    });
  }

  submitHandler = (ev) => {
    ev.preventDefault();
    console.log(ev.target.email.value, ev.target.password.value);
    if (ev.target.email.value === defData.login.email && ev.target.password.value === defData.login.pass) {
      authManager.authorize();
      this.props.history.push('/buy');
    }
  }

  render() {
    return (
      <main className="bg-matcha w-full min-h-screen flex justify-center items-center">
        <div className="text-white w-3/4">
          <LogoBox flipped></LogoBox>
          <form className="text-white" onSubmit={this.submitHandler}>
            <label htmlFor="email">Email</label>
            <TextInput name="email"></TextInput>
            <label htmlFor="password">Password</label>
            <TextInput name="password" type="password"></TextInput>
            <Button type="warning" className="mt-4">Login</Button>
          </form>
          <Link to="/buy">
            
          </Link>
        </div>
      </main>
    )
  }
}
