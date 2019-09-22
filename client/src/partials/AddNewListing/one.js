import React from 'react'
import addPicIcon from '../../assets/icons/add_picture.svg';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';

export default (props) => {
  return (
    <>
      <div className="border-solid border-matcha border rounded-lg flex justify-center items-center p-4">
        <img src={addPicIcon} alt="Add new listing shot" />
      </div>
      <fieldset className="my-4">
        <label htmlFor="title">Title</label>
        <TextInput name="title"></TextInput>
      </fieldset>
      <fieldset className="my-2">
        <label htmlFor="expiry">Expiry date</label>
        <TextInput name="expiry" type="date"></TextInput>
      </fieldset>
      <fieldset className="my-2">
        <label htmlFor="desc">Description</label>
        <TextArea name="desc" className="htmlForm-description"></TextArea>
      </fieldset>
    </>
  )
}
