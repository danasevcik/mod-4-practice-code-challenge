import React, { Component } from 'react';

// Click radio button and send up to App
class Sort extends Component {
  render() {
    return (
      <div>
        <h3>Sort Swatches</h3>
        <form onClick={(e) => this.props.handleSort(e.target.value)}>
          <label>
            <input type="radio" value="Alphabetically"/>
            Alphabetically
          </label>
          <label>
            <input type="radio" value="ROYGBIV"/>
            ROYGBIV
          </label>
        </form>
      </div>
    )
  }
}

export default Sort;
