import React, { Component } from "react";
import "./style.scss";
import styled from "styled-components";
import styleConfig from "../../styles/mixins/variables";
import buy from "../../assets/icons/Buy.svg";
import sell from "../../assets/icons/Sell.svg";
import search from "../../assets/icons/Search.svg";
import profile from "../../assets/icons/Profile.svg";

const NavTitle = styled.p`
  color: ${props => props.color};
`;

export default class NavigationBar extends Component {
  render() {
    return (
      <div className="bg-white min-w-full navbar">
        <ul className="flex flex-row justify-around">
          <li className="flex flex-col items-center w-10">
            <img className="w-8 h-8" src={buy} />
            <NavTitle className="text-xs" color={styleConfig.colors.matcha}>
              Buy
            </NavTitle>
          </li>
          <li className="flex flex-col items-center w-10">
            <img className="w-8 h-8" src={sell} />
            <NavTitle className="text-xs" color={styleConfig.colors.matcha}>
              Sell
            </NavTitle>
          </li>
          <li className="flex flex-col items-center w-10">
            <img className="w-8 h-8" src={search} />
            <NavTitle className="text-xs" color={styleConfig.colors.matcha}>
              Search
            </NavTitle>
          </li>
          <li className="flex flex-col items-center w-10">
            <img className="w-8 h-8" src={profile} />
            <NavTitle className="text-xs" color={styleConfig.colors.matcha}>
              Profile
            </NavTitle>
          </li>
        </ul>
      </div>
    );
  }
}
