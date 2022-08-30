import React, { Component } from "react";
import Iframe from "react-iframe";
import Header from "./header.js";
class Iframes extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="iframeDiv">
          <p>Iframe full</p>
          <Iframe
            class="iframeFull"
            src="https://app.getreprise.com/launch/z6eGYbX/"
          />
          <p>Iframe empty</p>
          <Iframe src="" />
        </div>
      </>
    );
  }
}

export default Iframes;
