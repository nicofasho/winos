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
      height: 'auto',
      gridGap: '10px'
    };
  }

  render() {
    const height = this.props.cellar.height;
    const width = this.props.cellar.width;

    const bottles = this.props.cellar.bottles.map((bottle, idx) => (
      <Bottle
        height={height}
        width={width}
        bottle={bottle}
        key={idx}
      />
    ));

    // const bottles = this.props.cellar.bottles.map((bottle, idx) => {
    //   let remainder = idx % width;
    //   if (remainder === 0) {
    //     return `<div className="bottleRow"><Bottle key=${idx} bottle=${bottle} />`;
    //   }
    //   if (remainder === width - 1) {
    //     return `<Bottle key=${idx} bottle=${bottle} /></div>`;
    //   }
    //   return `<Bottle key=${idx} bottle=${bottle} />`;
    // }).join('');
    // console.log(bottles);

    return (
      <div className="Cellar" style={this.generateStyles()} >
        {bottles}
      </div>
    );
  }
}

export default Cellar;
