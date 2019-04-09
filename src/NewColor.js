import React, { Component } from 'react';

// Create new color and send up to App
class NewColor extends Component {

  state={
    name: "",
    img: ""
  }

  handleNameChange = (e) => {
    this.setState({name: e.target.value})
  }

  handleUrlChange = (e) => {
    this.setState({img: e.target.value})
  }

  handleSubmit = (e) => {
    this.props.handleSubmit(this.state)
  }

  render() {
    return (
      <div>
        <h3>New Swatch</h3>
        <input type="text" placeholder="Name" value={this.state.name} onChange={this.handleNameChange}/>
        <input type="text" placeholder="Image URL" value={this.state.img} onChange={this.handleUrlChange}/>
        <button onClick={this.handleSubmit}>Create Swatch</button>
      </div>
    )
  }
}

export default NewColor;
