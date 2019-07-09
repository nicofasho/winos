import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        Nav
        <Link to="/dashboard">Winos</Link>
      </div>
    );
  }
}

export default Nav;
