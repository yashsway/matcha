import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AvatarCircle from '../../components/AvatarCircle';
import AddToCartCard from '../../components/AddToCartCard';

const Hero = styled.div`
  flex: 0 1 298px;
`;

const Navigation = styled.div`
  flex: 1 0 auto;
`;

const ListingTitle = styled.h1``;
const ListingPriceQuantity = styled.div``;
const ListingPrice = styled.h2``;
const ListingQuantity = styled.h2``;

const SellerDetails = styled.div`
`;

const ListingDetails = styled.div`
`;

const ProfileLine = styled.div`
`;

export default class ListingDetailPage extends Component {
  state = {
    base: "listing-detail-page",
    listing: {
      price: "1.24",
      measure: "lb",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam enim tellus eu suspendisse molestie ullamcorper ac. Risus, non habitasse molestie bibendum. Sit enim magna sollicitudin vel. Metus, enim, et convallis justo, vivamus sit sed."
    }
  }
  componentDidMount() {
    const { match } = this.props;
    console.log(match.params.id);
  }

  render() {
    return (
      <section className={`${this.state.base} min-h-screen flex flex-col`}>
        <Hero className="bg-gray-700 text-gray-100 flex flex-col">
          <Navigation className="p-4 h-3">
            <Link to="/">&lt; Back</Link>
          </Navigation>
          <div className="px-4 flex justify-between items-center">
            <ListingTitle className="text-4xl text-gray-100 h-full">Broccoli</ListingTitle>
            <div className="text-2xl h-full">$0.56/lb</div>
          </div>
          <ListingPriceQuantity className="flex justify-between px-4 items-center mb-4">
            <ListingPrice className="text-2xl">$1.24/lb</ListingPrice>
            <ListingQuantity className="text-gray-500">10lb available</ListingQuantity>
          </ListingPriceQuantity>
        </Hero>
        <SellerDetails className="p-4">
          <ProfileLine className="py-4 flex items-center">
            <AvatarCircle></AvatarCircle>
            <span>Food company Inc.</span>
          </ProfileLine>
        </SellerDetails>
        <ListingDetails className="p-4">
          {this.state.listing.desc}
        </ListingDetails>
        <AddToCartCard>
          
        </AddToCartCard>
      </section>
    )
  }
}
