import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <Link to="/dashboard">Winos</Link>
        <Link to="/" onClick={this.props.handleLogout} >Sign Out</Link>
      </div>
    );
  }
}

export default Nav;
