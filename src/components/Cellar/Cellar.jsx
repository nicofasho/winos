import React, { Component } from "react";
import BottleRow from "../../components/BottleRow/BottleRow";
import Bottle from '../../components/Bottle/Bottle';

class Cellar extends Component {

  generateSingleRow = (idx) => {
    return <BottleRow key={idx} bottles={this.props.cellar.bottles} />;
  }

  generateBottleRows = () => {
    for (let i = 1; i <= this.props.cellar.height; i += 1) {
      this.generateSingleRow(i);
    }
  }

  render() {

    const height = this.props.height;
    const width = this.props.width;

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
      <div className="Cellar">
        {this.generateBottleRows()}
      </div>
    );
  }
}

export default Cellar;
