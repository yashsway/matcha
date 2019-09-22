import React, { Component } from 'react';
import './style.scss';
import crossIcon from '../../assets/icons/cross.svg';
import LogoBox from '../../components/LogoBox';
import Button from '../../components/Button';

import FormPartialOne from '../../partials/AddNewListing/one';
import FormPartialTwo from '../../partials/AddNewListing/two';

export default class AddNewListing extends Component {
  state = {
    stage: "one",
    one: {
      next: "next",
      prev: null
    },
    two: {
      next: "submit listing",
      prev: "previous"
    },
    formRef: React.createRef()
  }

  getFormPartial() {
    switch(this.state.stage) {
      case "one":
        return <FormPartialOne></FormPartialOne>;
      case "two":
        return <FormPartialTwo></FormPartialTwo>;
    }
  }

  getFormOneData() {
    let fields = [
      'title',
      'expiry',
      'desc'
    ];
    let results = {};
    fields.forEach((name) => {
      results[name] = this.state.formRef.current[name].value;
    });
    return results;
  }

  getFormTwoData() {
    let fields = [
      'about',
      'weight',
      'min-weight',
      'price'
    ];
    let results = {};
    fields.forEach((name) => {
      results[name] = this.state.formRef.current[name].value;
    });
    return results;
  }

  prevStage = () => {
    if (this.state.stage === 'two') {
      this.setState({
        stage: 'one'
      });
    }
  }

  nextStage = () => {
    if (this.state.stage === 'one') {
      this.setState({
        stage: 'two',
        formData: Object.assign(this.state.formData || {}, this.getFormOneData())
      });
    } else if (this.state.stage === 'two') {
      // TODO: submit new listing and redirect
      this.setState({
        formData: Object.assign(this.state.formData || {}, this.getFormTwoData())
      });
    }
  }

  render() {
    return (
      <div className="add-new-listing">
        <header className="bg-white flex justify-center py-2">
          <LogoBox></LogoBox>
        </header>
        <div className="relative p-4 add-new-listing__card">
          <div className="flex justify-between">
            <h1 className="text-bold text-3xl">Add your listing</h1>
            <img src={crossIcon} alt="Cancel add listing"/>
          </div>
          <div className="my-4">
            <form ref={this.state.formRef}>
              {this.getFormPartial()}
            </form>
          </div>
          <div className="flex">
            <div className="flex-grow mr-2">
              {this.state.stage !== 'one' ? <Button className="w-full" type="secondary" clickHandler={this.prevStage}>{this.state[this.state.stage].prev}</Button> : ''}
            </div>
            <div className="flex-grow">
              <Button className="w-full" clickHandler={this.nextStage}>{this.state[this.state.stage].next}</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
