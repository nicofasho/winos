import React, { Component } from 'react';
import Bottle from '../Bottle/Bottle';

class Cellar extends Component {
  render() { 
    const cellarWidth = this.props.cellar.width;
    const cellarHeight = this.props.cellar.height;
    const bottles = this.props.cellar.bottles;
    let cellarLayout = bottles.map((bottle, idx) => {
      if (cellarWidth % idx === 0) return `<div className="BottleRow"><Bottle className="Bottle" bottle={bottle} />`;
      if (cellarWidth % idx === cellarWidth - 1) return `<Bottle className="Bottle" bottle={bottle} /></div>`;
      return `<Bottle className="Bottle" bottle={bottle} />`;
    }).join('');

    console.log('cellarLayout: ', cellarLayout);

    return ( 
      <div className="Cellar">
        {cellarLayout}
      </div>
     );
  }
}
 
export default Cellar;