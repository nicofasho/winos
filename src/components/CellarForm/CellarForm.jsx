import React, { Component } from "react";
import cellarService from "../../utils/cellarService";

class CellarForm extends Component {
  state = {
    name: this.props.cellar.name,
    width: this.props.cellar.width,
    height: this.props.cellar.height,
    temperature: this.props.cellar.temperature,
    id: this.props.cellar._id
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await cellarService.cellarUpdate(this.state);
      this.props.hideForms();
      this.props.handleUpdateCellars();
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <div>
        <h3>Edit {this.props.cellar.name}</h3>
        <form>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
          />

          <label htmlFor="width">Width: </label>
          <input
            type="number"
            name="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
          <label htmlFor="height">Height: </label>
          <input
            type="number"
            name="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <label htmlFor="temperature">Temperature: </label>
          <input
            type="text"
            name="temperature"
            value={this.state.temperature}
            onChange={this.handleChange}
          />
          <button onClick={this.handleSubmit} className="btn btn-primary">
            Submit
          </button>
          <p
            onClick={this.props.hideForms}
            className="btn btn-secondary btn-outline"
          >
            Cancel
          </p>
        </form>
      </div>
    );
  }
}

export default CellarForm;
