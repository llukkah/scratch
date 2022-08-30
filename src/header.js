import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <>
        <div className="headerLinks">
          <Link to="/">Home</Link>
          <Link to="/iframe">Iframe</Link>
          <Link to="/elements">Elements</Link>
        </div>
      </>
    );
  }
}

export default Header;
