import React, { Component } from "react";
import "./Bottle.css";
import cellarService from '../../utils/cellarService';

class Bottle extends Component {

  handleBottleClick = async e => {
    const bottleInfo = await cellarService.bottleDetails(this.props.cellarId, this.props.slotId, this.props.bottle._id);
    this.props.bottleDetails(bottleInfo, this.props.slotId);
  }

  

  render() {
    return <div className="Bottle" onClick={this.handleBottleClick} />;
  }
}

export default Bottle;
