import React, { Component } from 'react'
import {connect} from 'react-redux'
import BandInput from '../components/BandInput'

class BandsContainer extends Component {

  renderBands = () => {
    if (this.props.bands){

    return this.props.bands.map(band => <li>{band.name}</li>)
    }
  }

  render() {
    return(
      <div>
        BandsContainer
        <BandInput addBand={this.props.addBand}/>
        <ul>
          {this.renderBands()}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {bands: state.bands}
}

const mapDispatchToProps = (dispatch) => ({
  addBand: input => (dispatch({type: 'ADD_BAND', payload: input})) 
})

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
