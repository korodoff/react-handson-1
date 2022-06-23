import React, { Component } from "react";

class ClassComponent extends Component {
  render() {
    return (
      <>
        <h4>This is use using class component</h4>
        <p className="externamCss1">this is done using external CSS</p>
        <p style={{ color: "blue" }}>this is done using internal CSS</p>
      </>
    );
  }
}
export default ClassComponent;
