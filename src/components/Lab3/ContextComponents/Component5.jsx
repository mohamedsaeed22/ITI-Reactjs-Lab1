import React, { Component } from "react";
import { LanguageConsumer } from "./LanguageContext";

export default class Component5 extends Component {
  render() {
    return (
      <div className="context">
        <LanguageConsumer>
          {(value) => {
            return (
              <p>
                this is Component 5 and this value from component 1 using
                Context "{value}"
              </p>
            );
          }}
        </LanguageConsumer>
      </div>
    );
  }
}
