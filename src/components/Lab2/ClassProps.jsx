import React, { Component } from "react";

export default class ClassProps extends Component {
  render() {
    return (
      <>
        <hr />
        <h3>
          Your Track Name = "{this.props.tracks[0]}" and Track Code = "
          {this.props.tracks[0]}"
        </h3>
        {this.props.children}
      </>
    );
  }
}
