import React, { Component } from "react";
import Header from "./header.js";

class Elements extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="elementsContainer">
          <div className="elementsFull">
            <p>Paragraph</p>
            <div>Div</div>
            <a src="https://www.google.com">Anchor</a>
            <span>span</span>
          </div>
          <div className="elementsEmpty">
            <p></p>
            <div></div>
            <a src=""></a>
            <span></span>
          </div>
        </div>
      </>
    );
  }
}

export default Elements;
