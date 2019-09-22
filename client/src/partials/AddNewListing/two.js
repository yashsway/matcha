import React from 'react';
import SlideSelect from '../../components/SlideSelect';
import TextInput from '../../components/TextInput';
import TextArea from '../../components/TextArea';

export default () => {
  return (
    <>
      <fieldset className="my-4">
        <label htmlFor="about">Abour your product</label>
        <TextArea name="about"></TextArea>
      </fieldset>
      <div className="my-4">
        <SlideSelect />
      </div>
      <fieldset className="my-4">
        <label htmlFor="weight">Weight</label>
        <TextInput name="weight" placeholder="lbs"></TextInput>
      </fieldset>
      <fieldset className="my-4">
        <label htmlFor="min-weight">Minimum Weight</label>
        <TextInput name="min-weight" placeholder="lbs"></TextInput>
      </fieldset>
      <fieldset className="my-4">
        <label htmlFor="price">Price</label>
        <TextInput name="price" placeholder="per lb"></TextInput>
      </fieldset>
    </>
  )
}
