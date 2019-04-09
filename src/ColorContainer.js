import React, { Component } from 'react';
import ColorCard from './ColorCard';

// Renders ColorCards with favorite prop
class ColorContainer extends Component {

  render() {
    let colors = this.props.colors.map(color => {
      return <ColorCard color={color} key={color.id} favorite handleLike={this.props.handleLike}/>
    })
    return (
      <div className="swatch">
        <h3>ALL SWATCHES:</h3>
        {colors}
      </div>
    )
  }
}

export default ColorContainer;
