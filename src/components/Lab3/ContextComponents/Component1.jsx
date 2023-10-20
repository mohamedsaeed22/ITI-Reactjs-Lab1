import React, { Component } from "react";
import Component2 from "./Component2";
import { LanguageProvider } from "./LanguageContext";
import './context.css'
export default class Component1 extends Component {
  render() {
    return (
      <div className="context-wrapper">
      <div className="container context c1">
        <p>Component 1</p>
        <LanguageProvider value={"Free palestine"}>
          <Component2 />
        </LanguageProvider>
      </div>
      </div>
    );
  }
}
