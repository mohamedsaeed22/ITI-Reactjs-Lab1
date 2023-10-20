import React, { Component } from "react";
import Component3 from "./Component3";

export default class Component2 extends Component {
  render() {
    return (
      <div className="context">
        <p>Component 2</p>
        <Component3 />
      </div>
    );
  }
}
