import React from 'react';
import './style.scss';
import Logo from '../Logo';

export default (props) => {
  return (
    <div className={`flex items-center logo-box ${props.flipped ? 'text-white' : 'text-matcha'}`}>
      <div className="fill-current">
        <Logo></Logo>
      </div>
      <h1 className={`text-xl ml-2`}>Matcha</h1>
    </div>
  )
}

