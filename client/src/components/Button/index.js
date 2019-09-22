import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  state = {
    type: {
      primary: "bg-matcha hover:bg-matcha-dark text-white",
      seondary: "bg-eggshell hover:bg-eggshell-dark text-white",
      danger: "bg-brick hover:bg-brick-dark text-white",
      warning: "bg-sunshine hover:bg-sunshine-dark text-white"
    }
  }
  render() {
    return (
      <button className={`${this.props.type ? this.state.type[this.props.type] : ''} font-bold py-2 px-4 rounded ${this.props.caps ? 'uppercase' : ''} cursor-pointer ${this.props.className}`} onClick={this.clickHandler}>
        {this.props.children}
      </button>
    )
  }
}

Button.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'warning', 'danger'])
}

Button.defaultProps = {
  type: 'primary',
  caps: true,
  innerText: "default"
}
