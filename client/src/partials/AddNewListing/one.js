import React from 'react'
import addPicIcon from '../../assets/icons/add_picture.svg';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';

export default (props) => {
  return (
    <>
      <div className="border-solid border-matcha border rounded-lg flex justify-center items-center p-4">
        <img src={addPicIcon} alt="add a picture here" />
      </div>
      <fieldset className="my-4">
        <label for="title">Title</label>
        <TextInput name="title"></TextInput>
      </fieldset>
      <fieldset className="my-2">
        <label for="title">Expiry date</label>
        <TextInput name="title" type="date"></TextInput>
      </fieldset>
      <fieldset className="my-2">
        <label for="title">Description</label>
        <TextArea className="form-description"></TextArea>
      </fieldset>
    </>
  )
}
