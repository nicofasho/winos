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
    this.hideForms();
    this.setState({
      selBottle: bottle ? bottle : null,
      selBottleSlot: slot,
      showBottleForm: true
    });
  };

  showCellarEdit = () => {
    this.hideForms();
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
        <div className="card-body">
          <h3 className="card-title">{this.props.cellar.name}</h3>
          <div className="row">
            <Cellar
              cellar={this.props.cellar}
              bottleDetails={this.bottleDetails}
              hideForms={this.hideForms}
            />
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
                handleUpdateCellars={this.props.handleUpdateCellars}
              />
            ) : null}
          </div>
          <button
            onClick={this.showCellarEdit}
            className="btn btn-outline-secondary d-block"
          >
            Edit Cellar
          </button>
          <button
            onClick={this.deleteCellar}
            className="btn btn-danger d-block mt-3"
          >
            Delete Cellar
          </button>
        </div>
      </div>
    );
  }
}

export default CellarRow;
