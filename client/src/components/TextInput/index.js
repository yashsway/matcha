import React from 'react'

export default (props) => {
  return (
    <>
      <input type={props.type || 'text'} name={props.name || ''} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2" />
    </>
  )
}
