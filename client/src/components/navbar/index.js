import React, { Component } from "react";
import styled from "styled-components";
import styleConfig from "../../styles/mixins/variables";
import buy from "../../assets/icons/buy.svg";
import search from "../../assets/icons/search.svg";
import profile from "../../assets/icons/profile.svg";
import sell from "../../assets/icons/sell.svg";

const NavTitle = styled.p`
  color: ${props => props.color};
`;

export default class Navbar extends Component {
  render() {
    return (
      <div className="bg-white min-w-full navbar">
        <ul className="flex flex-row justify-around">
          <li className="flex flex-col items-center w-10">
            <img className="w-8 h-8" src={buy} alt="buy icon" />
            <NavTitle className="text-xs" color={styleConfig.colors.matcha}>
              Buy
            </NavTitle>
          </li>
          <li className="flex flex-col items-center w-10">
            <img className="w-8 h-8" src={sell} alt="sell icon" />
            <NavTitle className="text-xs" color={styleConfig.colors.matcha}>
              Sell
            </NavTitle>
          </li>
          <li className="flex flex-col items-center w-10">
            <img className="w-8 h-8" src={search} alt="search icon" />
            <NavTitle className="text-xs" color={styleConfig.colors.matcha}>
              Search
            </NavTitle>
          </li>
          <li className="flex flex-col items-center w-10">
            <img className="w-8 h-8" src={profile} alt="profile" />
            <NavTitle className="text-xs" color={styleConfig.colors.matcha}>
              Profile
            </NavTitle>
          </li>
        </ul>
      </div>
    );
  }
}
