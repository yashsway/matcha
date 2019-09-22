import React, { Component } from 'react';
import styled from 'styled-components';
import './style.scss';

import Button from '../Button';
import SlideSelect from '../SlideSelect';
import InfoLine from '../InfoLine';

const BtnTxt = styled.button`
`;

export default class AddToCartCard extends Component {
  render() {
    return (
      <div className={`bg-white shadow w-full add-to-cart-card ${this.props.className || ''}`}>
        <div className="bg-matcha text-white py-2 px-4">
          15 lbs available for purchase
        </div>
        <div className="py-4 px-4">
          <h5 className="text-semibold font-sans-serif text-lg">Select Quantity</h5>
          <label for="quant" className="font-sans-serif-body text-gray-500">Minimum of 3lbs or 1.3kg purchase</label>
          <div className="my-2">
            <input type="text" name="quant" className="inline-block shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2" />
            <SlideSelect className="inline-block" />
          </div>
        </div>
        <div className="py-2 border-solid border-gray-300 border-t">
          <div className="px-4 flex justify-between">
            <InfoLine title="order total" className="flex-grow">
              $5.60
            </InfoLine>
            <div className="flex-grow">
              <Button className="h-full w-full">buy now</Button>
            </div>
          </div>
        </div>

        {/* <div className="flex justify-between mb-3">
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
        </div> */}
      </div>
    )
  }
}
