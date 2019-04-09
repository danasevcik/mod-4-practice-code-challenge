import React, { Component } from 'react';
import ColorCard from './ColorCard';

// Renders ColorCards without favorite prop
class FavoriteContainer extends Component {

  render() {
    let favorites = this.props.favorites.map(color => {
      return <ColorCard color={color} key={color.id} handleDislike={this.props.handleDislike}/>
    })
    return (
      <div className="faves">
        <h3>FAVES:</h3>
        {favorites}
      </div>
    )
  }
}

export default FavoriteContainer;
