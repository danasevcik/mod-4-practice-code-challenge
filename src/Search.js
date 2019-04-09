import React, { Component } from 'react';

// Type in search and send up to App
class Search extends Component {

  handleSearch = (e) => {
    this.props.handleSearch(e.target.value)
  }

  render() {
    return (
      <div>
        <h3>Search Swatches</h3>
        <input type="text" placeholder="Search For A Color" value={this.props.searchTerm} onChange={this.handleSearch} />
      </div>
    )
  }
}

export default Search;
