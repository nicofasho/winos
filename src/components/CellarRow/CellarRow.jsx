import React, { Component } from "react";
import Cellar from "../Cellar/Cellar";
import BottleForm from "../BottleForm/BottleForm";
import "./CellarRow.css";
import CellarForm from "../CellarForm/CellarForm";

class CellarRow extends Component {
  state = {
    showCellarEdit: false,
    showBottleInfo: false,
    showBottleForm: false
  };

  showCellarEdit = () => {
    this.setState({ showCellarEdit: true });
  };

  hideForms = () => {
    this.setState({
      showCellarEdit: false,
      showBottleInfo: false,
      showBottleForm: false
    });
  };

  render() {
    return (
      <div className="CellarRow card">
        <h3 className="card-title">{this.props.cellar.name}</h3>
        <p onClick={this.showCellarEdit} className="btn btn-primary">
          Edit Cellar
        </p>
        <div>
          <Cellar cellar={this.props.cellar} />
          {this.state.showCellarEdit ? (
            <CellarForm
              cellar={this.props.cellar}
              hideForms={this.hideForms}
              handleUpdateCellars={this.props.handleUpdateCellars}
              hideForms={this.hideForms}
            />
          ) : null}
          {this.state.showBottleInfo ? (
            <BottleForm bottle={this.props.cellar} hideForms={this.hideForms} />
          ) : null}
        </div>
      </div>
    );
  }
}

export default CellarRow;
