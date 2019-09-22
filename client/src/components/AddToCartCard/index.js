import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../Button';
import './style.scss';

const BtnTxt = styled.button`
`;

export default class AddToCartCard extends Component {
  render() {
    return (
      <div className="bg-white p-4 border-solid border-gray-300 border-t-2 add-to-cart-card">
        <div className="flex justify-between mb-3">
          <div className="">
            <h4>Enter amount</h4>
            <div className="flex items-center">
              <input type="text" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2" />
              <span className="flex items-center">
                <BtnTxt className="mr-2">lb</BtnTxt>
                <BtnTxt className="mr-2">kg</BtnTxt>
              </span>
            </div>
          </div>
          <div className="">
            <h4>Your total</h4>
            <h3 className="text-3xl">$0.00</h3>
          </div>
        </div>
        <div className="flex justify-center">
          <Button className="mr-2 flex-auto">ADD TO CART</Button>
          <Button className="mr-2 flex-auto">BUY NOW</Button>
        </div>
      </div>
    )
  }
}
