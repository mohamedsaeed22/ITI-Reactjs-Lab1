import React, { Component } from "react";
import Component4 from "./Component4";
import { LanguageConsumer } from "./LanguageContext";

export default class Component3 extends Component {
  render() {
    return (
      <div className="context">
        <LanguageConsumer>
          {(value) => {
            return (
              <p>
                this is Component 3 and this value from component 1 using
                Context "{value}"
              </p>
            );
          }}
        </LanguageConsumer>
        <Component4 />
      </div>
    );
  }
}
