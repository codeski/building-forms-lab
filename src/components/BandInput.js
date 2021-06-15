// Add BandInput component
import React, { Component } from 'react'
// import { connect } from 'react-redux'

class BandInput extends Component {

  state = {
    name: ''
  }
  
  handleChange = (event) => {
    // console.log(this.state.name)
    this.setState(
      {
        name: event.target.value
      }
    )
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addBand(this.state)
    this.setState(
      {
        name: ''
      }
    )
  }

  render() {


    return(
      <div>
        Band Input
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type="text" value={this.state.name} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}



export default BandInput
