import React, { Component } from 'react';
import cellarService from '../../utils/cellarService';

class NewCellarForm extends Component {
  state = { 
    name: '',
    width: 0,
    height: 0,
    temperature: 62
   };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = async e => {
    e.preventDefault();
    try {
      await cellarService.createCellar(this.state);
      this.props.hideForm();
      this.props.handleUpdateCellars();
    } catch (err) {
      console.log(err);
    }
  };

  render() { 
    return ( 
      <div>
        <form>
          <label htmlFor="name">Name: </label>
          <input onChange={this.handleChange} type="text" name="name" value={this.state.name} />

          <label htmlFor="width">Width (in bottles): </label>
          <input onChange={this.handleChange} type="number" name="width" id="width" value={this.state.width} />

          <label htmlFor="height">Height (in bottles): </label>
          <input onChange={this.handleChange} type="number" name="height" id="height" value={this.state.height} />

          <label htmlFor="temperature">Temperature: </label>
          <input onChange={this.handleChange} type="number" name="temperature" id="temperature" value={this.state.temperature} />

          <button onClick={this.props.hideForm}>Cancel</button>
          <button onClick={this.handleSubmit}>Create Cellar</button>
        </form>
      </div>
     );
  }
}
 
export default NewCellarForm;