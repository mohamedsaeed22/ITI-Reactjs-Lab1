import React, { Component } from "react";
import Login from "./Login";
import Signup from "./Signup";

export default class FormWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLogin: true,
    };
  }
  
  toggleForm = (flag) => {
    this.setState({ showLogin: flag });
  }

  render() {
    return (
      <>
        {this.state.showLogin ? (
          <Login toggleForm={this.toggleForm} />
        ) : (
          <Signup toggleForm={this.toggleForm} />
        )}
      </>
    );
  }
}
