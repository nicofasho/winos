import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import cellarService from "../../utils/cellarService";
import CellarRow from "../../components/CellarRow/CellarRow";

class Dashboard extends Component {

  componentDidMount() {
    this.props.handleUpdateCellars();
  }

  render() {
    const cellarRows = this.props.cellars.map((cellar, idx) => (
      <CellarRow
        key={idx}
        cellar={cellar}
        handleUpdateCellars={this.props.handleUpdateCellars}
      />
    ));

    return (
      <div>
        <Nav handleLogout={this.props.handleLogout} />
        <h2>Dashboard</h2>
        <p>Hello {this.props.user.username}</p>
        {cellarRows}
      </div>
    );
  }
}

export default Dashboard;
