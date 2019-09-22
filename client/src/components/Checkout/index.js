import React, { Component } from "react";
import "./style.scss";
import LogoBox from "../../components/LogoBox";
import brocolli from "../../assets/images/brocolli.jpg";
import Button from "../Button";

export class Checkout extends Component {
  render() {
    return (
      <section className="mx-4">
        <div className="flex flex-row justify-center h-16 items-center">
          <LogoBox></LogoBox>
        </div>
        <h1 className="text-2xl mb-4">Checkout</h1>
        <img className="checkout-img" src={brocolli} alt="brocolli" />
        <div className="mt-6 pb-2 checkout-details">
          <h5 className="font-black text-lg">Your Order</h5>
          <div className="flex flex-row justify-between mt-6">
            <p>Brocolli</p>
            <p>$5.60 for 5lbs</p>
          </div>
        </div>
				<div>
					<h3 className="font-black text-lg pt-6">Send money to Honeyfield Farms</h3>
					<p className="color-gray-300 pt-4">RECIPIENT</p>
					<p className="pt-2">Honeyfieldfarms@email.com</p>
				</div>
				<form className="flex flex-col">
					<label>
						Security Question
					</label>
					<input className="input-field" type="text" placeholder="What is this form?"/>
					<label>
						Answer
					</label>
					<input className="input-field" type="text" placeholder="Matcha App"/>
				</form>
        <Button className="mx-auto my-4" type="warning">Interac e-transfer</Button>
      </section>
    );
  }
}

export default Checkout;
