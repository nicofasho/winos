import React, { Component } from "react";
import Bottle from "../../components/Bottle/Bottle";

class Cellar extends Component {

  generateStyles = () => {

    const height = this.props.cellar.height;
    const width = this.props.cellar.width;

    return {
      display: "grid",
      gridTemplateColumns: `repeat(${width}, 1fr)`,
      gridTemplateRows: `repeat(${height}, 1fr)`,
      maxWidth: "45%",
      width: `${width * 75}px`,
      height: '100%',
      gridGap: '10px'
    };
  }

  render() {
    const bottles = this.props.cellar.bottles.map((bottle, idx) => (
      <Bottle
        slot={idx}
        bottle={bottle}
        cellarId={this.props.cellar._id}
        key={idx}
        bottleDetails={this.props.bottleDetails}
        hideForms={this.props.hideForms}
      />
    ));

    return (
      <div className="Cellar mb-4 col" style={this.generateStyles()} >
        {bottles}
      </div>
    );
  }
}

export default Cellar;
