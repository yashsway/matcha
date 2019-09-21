import React, { Component } from 'react'

export default class AvatarCircle extends Component {
  render() {
    return (
      <img className="w-10 h-10 rounded-full mr-4" src={this.props.imgSrc} alt={this.props.imgAlt} />
    );
  }
}
