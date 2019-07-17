import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
// import cellarService from "../../utils/cellarService";
import CellarRow from "../../components/CellarRow/CellarRow";
import NewCellarForm from '../../components/NewCellarForm/NewCellarForm';

class Dashboard extends Component {

  state = {
    newCellarForm: false
  };

  async componentDidMount() {
    this.props.handleUpdateCellars();
  };

  showNewCellarForm = () => {
    this.setState({ newCellarForm: true })
  };

  hideForm = () => {
    this.setState({
      newCellarForm: false
    });
  };

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
        {this.state.newCellarForm ? ( <NewCellarForm hideForm={this.hideForm} handleUpdateCellars={this.props.handleUpdateCellars} /> ) : null}
        <button className="btn btn-primary" onClick={this.showNewCellarForm}>Create a New Cellar</button>
      </div>
    );
  }
}

export default Dashboard;
