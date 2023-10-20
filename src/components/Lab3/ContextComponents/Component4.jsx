import React, { Component } from "react";
import Component5 from "./Component5";

export default class Component4 extends Component {
  render() {
    return (
      <div className="context">
        <p>Component 4</p>
        <Component5 />
      </div>
    );
  }
}
