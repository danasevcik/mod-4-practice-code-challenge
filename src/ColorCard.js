import React, { Component } from 'react';
import FavoriteButton from './FavoriteButton';
import UnfavoriteButton from './UnfavoriteButton';

// If in swatches, render favorite button
// Otherwise (in favorites), render unfavorite button
class ColorCard extends Component {
  render() {
    return (
      <div>
        <h3>{this.props.color.name.toUpperCase()}</h3>
        <img alt="color swatch" src={this.props.color.img} style={{height: '200px', width: '200px'}}/>
        <p></p>
        {this.props.favorite ? <FavoriteButton color={this.props.color} handleLike={this.props.handleLike}/> : <UnfavoriteButton color={this.props.color} handleDislike={this.props.handleDislike}/>}
      </div>
    )
  }
}

export default ColorCard;
