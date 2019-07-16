import React, { Component } from "react";
import Cellar from "../Cellar/Cellar";
import BottleForm from "../BottleForm/BottleForm";
import "./CellarRow.css";
import CellarForm from "../CellarForm/CellarForm";
import cellarService from "../../utils/cellarService";

class CellarRow extends Component {
  state = {
    showCellarEdit: false,
    showBottleInfo: false,
    showBottleForm: false,
    selBottle: {}
  };

  bottleDetails = (bottle, slot) => {
    this.setState({
      selBottle: bottle,
      selBottleSlot: slot,
      showBottleForm: true
    });
  };

  showCellarEdit = () => {
    this.setState({ showCellarEdit: true });
  };

  hideForms = () => {
    this.setState({
      showCellarEdit: false,
      showBottleForm: false
    });
  };

  deleteCellar = async e => {
    e.preventDefault();
    await cellarService.deleteCellar(this.props.cellar._id);
    this.props.handleUpdateCellars();
  };

  render() {
    return (
      <div className="CellarRow card">
        <h3 className="card-title">{this.props.cellar.name}</h3>
        <div className="card-body">
          <div>
            <Cellar cellar={this.props.cellar} bottleDetails={this.bottleDetails} />
            {this.state.showCellarEdit ? (
              <CellarForm
                cellar={this.props.cellar}
                hideForms={this.hideForms}
                handleUpdateCellars={this.props.handleUpdateCellars}
              />
            ) : null}
            {this.state.showBottleForm ? (
              <BottleForm
                bottle={this.state.selBottle}
                hideForms={this.hideForms}
                cellarId={this.props.cellar._id}
                slot={this.state.selBottleSlot}
              />
            ) : null}
          </div>
          <button
            onClick={this.showCellarEdit}
            className="btn btn-outline-secondary"
          >
            Edit Cellar
          </button>
          <button onClick={this.deleteCellar} className="btn btn-danger">
            Delete Cellar
          </button>
        </div>
      </div>
    );
  }
}

export default CellarRow;
