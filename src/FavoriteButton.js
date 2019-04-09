import React, { Component } from 'react';

class FavoriteButton extends Component {

  handleLike = () => {
    this.props.handleLike(this.props.color)
  }

  render() {
    return (
      <span onClick={this.handleLike} role="img" aria-label="Thumbs Up">Like 👍🏽</span>
    )
  }
}

export default FavoriteButton;
