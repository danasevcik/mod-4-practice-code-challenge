import React, { Component } from 'react';
import './AppCss.css';
import ColorContainer from './ColorContainer'
import FavoriteContainer from './FavoriteContainer'
import Sort from './Sort'
import Search from './Search'
import NewColor from './NewColor'

// Holds state for colors and favorites
// Holds color container component and favorite container component
// Handles like, dislike, sort and search
class App extends Component {
  state={
    colors: [],
    favorites: [],
    roygbiv: [],
    searchTerm: ""
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
      let newFaves = [...this.state.favorites, colorObj]
      this.setState({favorites: newFaves})
    }
  }

  handleDislike = (colorObj) => {
    let newFaves = this.state.favorites.filter(color => {
      return color.id !== colorObj.id
    })
    this.setState({favorites: newFaves})
  }

  handleSort = (sortParam) => {
    if (sortParam === "Alphabetically") {
      let sortedColors = [...this.state.colors].sort((a,b) => {
          return a.name.localeCompare(b.name)
      })
      this.setState({colors: sortedColors})
    }
    else if (sortParam === "ROYGBIV") {
      this.setState({colors: [...this.state.roygbiv]})
    }
  }

  handleSearch = (search) => {
    this.setState({searchTerm: search})
  }

  handleSubmit = (colorObj) => {
    console.log(colorObj);
    let newColors = [...this.state.colors, colorObj]
    this.setState({colors: newColors})
  }

  render() {
    let searchColors = this.state.colors.filter(color => {
      return color.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
    return (
      <div>
        <h1>THE COLOR SWATCH APP<span role="img" aria-label="Artist Palette">🎨</span></h1>
        <Sort handleSort={this.handleSort}/>
        <Search handleSearch={this.handleSearch}/>
        <NewColor handleSubmit={this.handleSubmit}/>
        <ColorContainer colors={searchColors} handleLike={this.handleLike}/>
        <FavoriteContainer style={{float: 'right'}} favorites={this.state.favorites} handleDislike={this.handleDislike}/>
      </div>
    );
  }
}

export default App;
