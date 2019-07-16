import React, { Component } from "react";
import cellarService from "../../utils/cellarService";

class BottleForm extends Component {
  state = {
    name: this.props.bottle.name,
    year: this.props.bottle.year,
    country: this.props.bottle.country,
    type: this.props.bottle.type,
    color: this.props.bottle.color,
    winery: this.props.bottle.winery,
    bestTemperature: this.props.bottle.bestTemperature,
    slot: this.props.slot
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      (await this.props.bottle)
        ? cellarService.createOrUpdateBottle(
            this.props.cellarId,
            this.props.slot,
            this.props.bottle._id
          )
        : cellarService.createOrUpdateBottle(
            this.props.cellarId,
            this.props.slot
          );
      this.props.hideForms();
      this.props.handleUpdateCellars();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <h3>{this.props.bottle ? `Edit ${this.props.bottle.name}` : 'Add a New Bottle'}</h3>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name: </label>
          <input type="text" name="name" value={this.state.name} />

          <label htmlFor="year">Year: </label>
          <input type="number" name="year" value={this.state.year} />

          <label htmlFor="country">Country: </label>
          <input type="text" name="country" value={this.state.country} />

          <label htmlFor="type">Type: </label>
          <input type="text" name="type" value={this.state.type} />

          <label htmlFor="color">Color: </label>
          <input type="text" name="color" value={this.state.color} />

          <label htmlFor="winery">Winery: </label>
          <input type="text" name="winery" value={this.state.winery} />

          <label htmlFor="bestTemperature">Best Temperature: </label>
          <input type="text" name="bestTemperature" value={this.state.bestTemperature} />

          <button>{this.props.bottle ? 'Edit Bottle' : 'Create Bottle'}</button>
        </form>
      </div>
    );
  }
}

export default BottleForm;
