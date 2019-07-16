import React, { Component } from "react";
import Cellar from "../Cellar/Cellar";
import BottleForm from "../BottleForm/BottleForm";
import "./CellarRow.css";
import CellarForm from "../CellarForm/CellarForm";
import cellarService from '../../utils/cellarService';

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

  deleteCellar = async e => {
    e.preventDefault();
    cellarService.deleteCellar(this.props.cellar._id);
    this.props.handleUpdateCellars();
  }

  render() {
    return (
      <div className="CellarRow card">
        <h3 className="card-title">{this.props.cellar.name}</h3>
        <button onClick={this.showCellarEdit} className="btn btn-primary">
          Edit Cellar
        </button>
        <div>
          <Cellar cellar={this.props.cellar} />
          {this.state.showCellarEdit ? (
            <CellarForm
              cellar={this.props.cellar}
              hideForms={this.hideForms}
              handleUpdateCellars={this.props.handleUpdateCellars}
            />
          ) : null}
          {this.state.showBottleInfo ? (
            <BottleForm bottle={this.props.cellar} hideForms={this.hideForms} />
          ) : null}
        </div>
        <button onClick={this.deleteCellar} className="btn btn-danger">
          Delete Cellar
        </button>
      </div>
    );
  }
}

export default CellarRow;
