import React from 'react'

export default (props) => {
  function onToggle() {

  }

  return (
    <div className={props.className || ''} onClick={onToggle}>  
      <span className="bg-eggshell h-4 w-4 text-eggshell-dark text-bold p-4">lb</span>
      <span className="bg-gray-100 h-4 w-4 text-gray-300 p-4">kg</span>
    </div>
  )
}
