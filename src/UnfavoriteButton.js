import React, { Component } from 'react';

// Send click handler up to App
class UnfavoriteButton extends Component {

  handleDislike = () => {
    this.props.handleDislike(this.props.color)
  }

  render() {
    return (
      <span onClick={this.handleDislike} role="img" aria-label="Thumbs Down">Dislike 👎🏽</span>
    )
  }
}

export default UnfavoriteButton;
