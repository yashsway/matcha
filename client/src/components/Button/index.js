import React, { Component } from 'react'

export default class Button extends Component {
  state = {
    primary: "bg-gray-400 hover:bg-gray-700 text-white"
  }
  render() {
    return (
      <button className={`${this.props.primary ? this.state.primary : ''} font-bold py-2 px-4 rounded ${this.props.className}`} onClick={this.clickHandler}>
        {this.props.children}
      </button>
    )
  }
}

Button.defaultProps = {
  primary: true,
  caps: false,
  innerText: "default"
}
