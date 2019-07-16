import React, { Component } from "react";
import "./Bottle.css";
import cellarService from '../../utils/cellarService';

class Bottle extends Component {

  handleBottleClick = async e => {
    // console.log(`bottle slot: ${this.props.slot} clicked`)
    const bottleInfo = this.props.bottle ? await cellarService.bottleDetails(this.props.cellarId, this.props.slot, this.props.bottle._id) : null ;
    this.props.bottleDetails(bottleInfo, this.props.slot);
  }

  

  render() {
    return <div className="Bottle" onClick={this.handleBottleClick} />;
  }
}

export default Bottle;
