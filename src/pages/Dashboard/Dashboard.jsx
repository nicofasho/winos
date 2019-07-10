import React, { Component } from 'react';
import Nav from "../../components/Nav/Nav";
import cellarService from '../../utils/cellarService';

class Dashboard extends Component {

  async componentDidMount() {
    const cellars = await cellarService.cellarIndex();
    this.props.handleUpdateCellars(cellars);
    console.log('cellars: ', cellars);
  }

  render() { 

    const cellarRows = this.props.cellars.map((cellar, idx) => (
      <div>{cellar.name}</div>
    ));

    return (
    <div>
      <Nav handleLogout={this.props.handleLogout} />
      <h2>Dashboard Page</h2>
      <p>Hello {this.props.user.username}</p>
      {cellarRows}
    </div>
  );
  }
}
 
export default Dashboard;