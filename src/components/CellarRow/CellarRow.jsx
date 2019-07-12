import React, { Component } from "react";
import Cellar from '../Cellar/Cellar';
import BottleForm from '../BottleForm/BottleForm';
import './CellarRow.css';

class CellarRow extends Component {
  render() {
    return (
      <div className="CellarRow card">
        <h3 className="card-title">{this.props.cellar.name}</h3>
        <Cellar cellar={this.props.cellar} />
      </div>
    );
  }
}

export default CellarRow;
