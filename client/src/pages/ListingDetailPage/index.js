import React, { Component } from 'react';
import './style.scss';
import storage from '../../utilities/storage';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import AvatarCircle from '../../components/AvatarCircle';
import AddToCartCard from '../../components/AddToCartCard';
import InfoLine from '../../components/InfoLine';

import potato from '../../assets/images/potatoes.jpg';
import broc from '../../assets/images/brocolli.jpg';
import carrots from '../../assets/images/carrots.jpg';
import tomatoes from '../../assets/images/tomatoes.jpg';
import pepper from '../../assets/images/red-peppers.jpg';
import bokChoy from '../../assets/images/bok-choy.jpg';

const Hero = styled.div`
  flex: 0 1 298px;
  background: ${props => `linear-gradient(360deg, #2D4133 4.55%, rgba(45, 65, 51, 0) 77.4%),
  url(${props.image})`};
  background-size: cover;
`;
const Navigation = styled.div`
  flex: 1 0 auto;
`;
const ListingTitle = styled.h1``;
const SellerDetails = styled.div``;
const ListingDetails = styled.div``;
const ProfileLine = styled.div``;

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
    storage.getDb().then((data) => {
      this.setState({
        data: data
      })
    });
  }

  componentDidUpdate() {
    this.getItem();
  }

  getImage = () => {
    switch(this.props.match.params.id.toLowerCase()) {
      case "potatoes":
        return potato;
      case "broccolli":
        return broc;
      case "tomatoes":
        return tomatoes;
      case "carrots":
        return carrots;
      case "bok-choy":
        return bokChoy;
      case "red-peppers":
        return pepper;
      default:
        return broc;
    }
  }

  getItem() {
    if (this.props.match && this.props.match.params.id) {
      if (this.state.data) {
        return (this.state.data.buyListings.find((listing) => {
          return listing.title.toLowerCase() === this.props.match.params.id;
        }) || {});
      }
    }
    return {};
  }

  isSellerView() {
    return this.props.location.pathname.includes('sell');
  }

  render() {
    return (
      <section className={`${this.state.base} min-h-screen flex flex-col`}>
        <Hero className="bg-gray-700 text-gray-100 flex flex-col" image={this.getImage()}>
          <Navigation className="p-4 flex-auto">
            <Link to={`${this.isSellerView() ? '/sell' : '/buy'}`}>&lt; Back</Link>
          </Navigation>
          <div className="px-4 my-3">
            <ListingTitle className="text-4xl text-gray-100 h-full w-2/4 inline-block">{this.getItem().title || 'Loading...'}</ListingTitle>
            <div className="text-2xl h-full w-2/4 inline-block text-right">${this.getItem().rate}/{this.getItem().unit}</div>
          </div>
        </Hero>
        <AddToCartCard isSellerView={this.isSellerView()} listing={this.getItem()} className="mb-4">
        </AddToCartCard>
        <ListingDetails className="px-4">
          <SellerDetails>
            <InfoLine title="supplier">
              <ProfileLine className="py-4 flex items-center">
                <AvatarCircle></AvatarCircle>
                <span>Food company Inc.</span>
              </ProfileLine>
            </InfoLine>
            <InfoLine title="location">
              123 Sesame Street
              Toronto ON
              1A1 B2B
            </InfoLine>
            <InfoLine title="expires in">
              {this.getItem().expiry}
            </InfoLine>
            <InfoLine title="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam enim tellus eu suspendisse molestie ullamcorper ac. Risus, non habitasse molestie bibendum. Sit enim magna sollicitudin vel. Metus, enim, et convallis justo, vivamus sit sed.
            </InfoLine>
          </SellerDetails>
          {this.state.listing.desc}
        </ListingDetails>
      </section>
    )
  }
}
