import React, { Component } from 'react';
import './AppCss.css';
import ColorContainer from './ColorContainer'
import FavoriteContainer from './FavoriteContainer'
import Sort from './Sort'

// Holds state for colors and favorites
// Holds color container component and favorite container component

class App extends Component {
  state={
    colors: [],
    favorites: [],
    roygbiv: []
  }

  componentDidMount() {
    fetch('http://localhost:3000/colors')
    .then(resp => resp.json())
    .then(colors => (
      this.setState({colors: colors, roygbiv: colors})
    ))
  }

  handleLike = (colorObj) => {
    if (!this.state.favorites.includes(colorObj)) {
      console.log('not there');
      let newFaves = [...this.state.favorites, colorObj]
      this.setState({favorites: newFaves}, () => console.log(this.state.favorites))
    }
  }

  handleDislike = (colorObj) => {
    console.log(colorObj);
    let newFaves = this.state.favorites.filter(color => {
      return color.id !== colorObj.id
    })
    this.setState({favorites: newFaves})
  }

  handleSort = (sortParam) => {
    console.log(sortParam);
    if (sortParam === "Alphabetically") {
      let sortedColors = [...this.state.colors].sort((a,b) => {
          return a.name.localeCompare(b.name)
      })
      this.setState({colors: sortedColors})
    }
    else if (sortParam === "ROYGBIV") {
      console.log(this.state.roygbiv);
      this.setState({colors: [...this.state.roygbiv]})
    }
  }

  render() {
    return (
      <div>
        <h1>THE COLOR SWATCH APP<span role="img" aria-label="Artist Palette">🎨</span></h1>
        <Sort handleSort={this.handleSort}/>
        <ColorContainer colors={this.state.colors} handleLike={this.handleLike}/>
        <FavoriteContainer style={{float: 'right'}} favorites={this.state.favorites} handleDislike={this.handleDislike}/>
      </div>
    );
  }
}

export default App;
