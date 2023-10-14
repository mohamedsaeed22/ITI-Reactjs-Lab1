import React, { Component } from "react";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      isloggedIn: false,
      subscription: "Guest",
    };
  }

  changeState(params) {
    this.setState({
      isloggedIn: true,
      subscription: "You now have a subscription",
    });
  }

  render() {
    return (
      <>
        <hr />
        {this.setState ? (
          <h4>{this.state.subscription}</h4>
        ) : (
          <h4>{this.state.subscription}</h4>
        )}
        <input type="button" value="Login" onClick={() => this.changeState()} />
      </>
    );
  }
}
