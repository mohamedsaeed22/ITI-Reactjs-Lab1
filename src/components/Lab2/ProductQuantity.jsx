import React, { Component } from "react";
import './productQuantity.css'
export default class ProductQuantity extends Component {
  constructor() {
    super();
    this.state = {
      counter: 1,
    };
  }
  increment() {
    this.setState({ counter: this.state.counter + 1 });
  }
  decrement() {
    this.state.counter > 1 &&
      this.setState({ counter: this.state.counter - 1 });
  }
  render() {
    return (
      <div className="btns-wrapper">
        <button onClick={() => this.increment()}><i class="fa-solid fa-plus"></i></button>
        {this.state.counter}
        <button onClick={() => this.decrement()}><i class="fa-solid fa-minus"></i></button>
      </div>
    );
  }
}
