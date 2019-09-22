import React from 'react'

export default (props) => {
  function onToggle() {

  }

  return (
    <div className={props.className || ''} onClick={onToggle}>  
      toggle here.
    </div>
  )
}
