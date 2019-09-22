import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import "./style.scss";
import styled from "styled-components";
import { styleConfig } from "../../styles/mixins/variables";
import buyIcon from "../../assets/icons/Buy.svg"
import sellIcon from "../../assets/icons/Sell.svg";
import searchIcon from "../../assets/icons/Search.svg";
import profileIcon from "../../assets/icons/Profile.svg";

const NavTitle = styled.p`
  color: ${props => props.color};
`;

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="navigation-bar bg-white min-w-full border-solid border-top border-t border-gray-400">
        <ul className="flex flex-row justify-around">
          <li className="w-10 nav-link-wrapper"> 
            <NavLink to="/buy" className="flex flex-col items-center nav-link" activeClassName="text-matcha selected">
              <img className="w-8 h-8" src={buyIcon} />
              <NavTitle className="text-xs mt-1">
                Buy
              </NavTitle>
            </NavLink>
          </li>
          <li className="w-10 nav-link-wrapper"> 
            <NavLink to="/sell" className="flex flex-col items-center nav-link" activeClassName="text-matcha selected">
              <img className="w-8 h-8" src={sellIcon} />
              <NavTitle className="text-xs mt-1">
                Sell
              </NavTitle>
            </NavLink>
          </li>
          <li className="w-10 nav-link-wrapper"> 
            <NavLink to="/search" className="flex flex-col items-center nav-link" activeClassName="text-matcha selected">
              <img className="w-8 h-8" src={searchIcon} />
              <NavTitle className="text-xs mt-1">
                Search
              </NavTitle>
            </NavLink>
          </li>
          <li className="w-10 nav-link-wrapper"> 
            <NavLink to="/profile" className="flex flex-col items-center nav-link" activeClassName="text-matcha selected">
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
