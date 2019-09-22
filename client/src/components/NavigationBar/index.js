import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "./style.scss";
import styled from "styled-components";
import { styleConfig } from "../../styles/mixins/variables";
import buyIcon from "../../assets/icons/buy.svg"
import sellIcon from "../../assets/icons/sell.svg";
import searchIcon from "../../assets/icons/search.svg";
import profileIcon from "../../assets/icons/profile.svg";

const NavTitle = styled.p`
  color: ${props => props.color};
`;

export default class NavigationBar extends Component {
  componentDidMount() {
    console.log(this.props);
  }

  render() {
    return (
      <div className="bg-white min-w-full navigation-bar">
        <ul className="flex flex-row justify-around">
          <li className="w-10 nav-link-wrapper"> 
            <NavLink exact to="/buy" className="flex flex-col items-center nav-link" activeClassName="text-matcha selected">
              <img className="w-8 h-8" src={buyIcon} />
              <NavTitle className="text-xs mt-1">
                Buy
              </NavTitle>
            </NavLink>
          </li>
          <li className="w-10 nav-link-wrapper"> 
            <NavLink to="/sell/current" className="flex flex-col items-center nav-link" activeClassName="text-matcha selected">
              <img className="w-8 h-8" src={sellIcon} />
              <NavTitle className="text-xs mt-1">
                Sell
              </NavTitle>
            </NavLink>
          </li>
          <li className="w-10 nav-link-wrapper"> 
            <NavLink exact to="/search" className="flex flex-col items-center nav-link" activeClassName="text-matcha selected">
              <img className="w-8 h-8" src={searchIcon} />
              <NavTitle className="text-xs mt-1">
                Search
              </NavTitle>
            </NavLink>
          </li>
          <li className="w-10 nav-link-wrapper"> 
            <NavLink exact to="/profile" className="flex flex-col items-center nav-link" activeClassName="text-matcha selected">
              <img className="w-8 h-8" src={profileIcon} />
              <NavTitle className="text-xs mt-1">
                Profile
              </NavTitle>
            </NavLink>
          </li>
        </ul>
      </div>
    );
  }
}