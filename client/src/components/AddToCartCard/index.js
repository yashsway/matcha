import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './style.scss';

import Button from '../Button';
import SlideSelect from '../SlideSelect';
import InfoLine from '../InfoLine';

export default class AddToCartCard extends Component {
  componentDidUpdate() {
  }

  render() {
    return (
      <div className={`bg-white shadow w-full add-to-cart-card ${this.props.className || ''}`}>
        <div className="bg-matcha text-white py-2 px-4">
          {this.props.listing && this.props.listing.stock && this.props.listing.unit ? `${this.props.listing.stock} ${this.props.listing.unit} available for purchase` : 'loading stock information...'}
        </div>
        <div className="py-4 px-4">
          <h5 className="text-semibold font-sans-serif text-lg">Select Quantity</h5>
          <label htmlFor="quant" className="font-sans-serif-body text-gray-500">Minimum of 3lbs or 1.3kg purchase</label>
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
              <Link to="/buy/1414/checkout">
                <Button className="h-full w-full">{this.props.isSellerView ? 'sell again' : 'buy now'}</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
