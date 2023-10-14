import React, { Component } from "react";

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
      <>
        <hr />
        <button onClick={() => this.increment()}>+</button>
        {this.state.counter}
        <button onClick={() => this.decrement()}>-</button>
      </>
    );
  }
}
