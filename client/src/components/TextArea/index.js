import React from 'react'

export default (props) => {
  return (
    <textarea name={props.name || ''} className={"shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2 " + (props.className || '')}></textarea>
  )
}
