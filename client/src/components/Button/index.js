import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  state = {
    type: {
      primary: "bg-matcha hover:bg-matcha-dark text-white",
      secondary: "bg-white border-solid border-matcha border hover:bg-matcha text-matcha hover:text-white",
      tertiary: "bg-eggshell hover:bg-eggshell-dark text-gray-700",
      danger: "bg-brick hover:bg-brick-dark text-white",
      warning: "bg-sunshine hover:bg-sunshine-dark text-gray-900"
    }
  }

  clickHandler = () => {
    if (this.props.clickHandler) {
      this.props.clickHandler();
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
