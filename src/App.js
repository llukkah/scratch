import React, { Component } from "react";
import "./App.css";
import { Router, Link } from "react-router-dom";
import Iframe from "./iframe.js";
import Header from "./header.js";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Iframe />
        <p>app.js</p>
      </div>
    );
  }
}

export default App;
