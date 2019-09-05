import React, { Component } from "react";
import cellarService from "../../utils/cellarService";

class BottleForm extends Component {

  setInitialState = () => {
    return this.props.bottle
      ? this.setState({
          name: this.props.bottle.name,
          year: this.props.bottle.year,
          country: this.props.bottle.country,
          type: this.props.bottle.type,
          color: this.props.bottle.color,
          winery: this.props.bottle.winery,
          bestTemperature: this.props.bottle.bestTemperature,
          // slot: this.props.slot

        })
      : this.setState({
          name: "",
          year: "",
          country: "",
          type: "",
          color: "",
          winery: "",
          bestTemperature: "",
          // slot: this.props.slot
        });
  };

  componentWillMount() {
    this.setInitialState();
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      this.props.bottle
        ? await cellarService.createOrUpdateBottle(
            this.state,
            this.props.cellarId,
            this.props.slot,
            this.props.bottle._id
          )
        : await cellarService.createOrUpdateBottle(
            this.state,
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
      <div className="col">
        <h3>
          {this.props.bottle
            ? `Edit ${this.props.bottle.name}`
            : "Add a New Bottle"}
        </h3>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              value={this.state.name}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="year">Year: </label>
            <input
              type="number"
              name="year"
              onChange={this.handleChange}
              value={this.state.year}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="country">Country: </label>
            <input
              type="text"
              name="country"
              onChange={this.handleChange}
              value={this.state.country}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Type: </label>
            <input
              type="text"
              name="type"
              onChange={this.handleChange}
              value={this.state.type}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="color">Color: </label>
            <input
              type="text"
              name="color"
              onChange={this.handleChange}
              value={this.state.color}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="winery">Winery: </label>
            <input
              type="text"
              name="winery"
              onChange={this.handleChange}
              value={this.state.winery}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="bestTemperature">Best Temperature: </label>
            <input
              type="text"
              name="bestTemperature"
              value={this.state.bestTemperature}
              onChange={this.handleChange}
              className="form-control"
            />
          </div>

          <input
            className="btn btn-primary"
            type="submit"
            value={this.props.bottle ? "Edit Bottle" : "Create Bottle"}
          />
          <button
            className="btn btn-outline-secondary"
            onClick={this.props.hideForms}
          >
            Cancel
          </button>
        </form>
      </div>
    );
  }
}

export default BottleForm;
