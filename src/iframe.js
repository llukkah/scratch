import React, { Component } from "react";
import Iframe from "react-iframe";
import Header from "./header.js";
class Iframes extends Component {
  render() {
    return (
      <>
        <Header />
        <p>Iframe full</p>
        <p>Iframe empty</p>
      </>
    );
  }
}

export default Iframes;
