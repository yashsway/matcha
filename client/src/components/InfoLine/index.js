import React from 'react';

export default (props) => {
  return (
    <div className={"block mb-4 " + (props.className || '')}>
      <h4 className="uppercase font-semibold font-sans-serif text-gray-500">{props.title || "Title!"}</h4>
      <p className="font-sans-serif-body">{props.children || props.content || "This is some content"}</p>
    </div>
  )
}
