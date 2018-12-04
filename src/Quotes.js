import React, { Component } from 'react'
import axios from 'axios'

class Quotes extends Component {
  componentDidMount = () => {
    axios
      .get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => {
        this.setState({
          quotes: response.data
        })
      })
  }

  _click = event => {
    // On Click Want to Refresh the Data
    axios
      .get('https://ron-swanson-quotes.herokuapp.com/v2/quotes')
      .then(response => {
        let randomIndex = Math.floor(this.rons.length * Math.random())

        this.setState({
          quotes: response.data,
          image: this.rons[randomIndex]
        })
      })
  }
  render() {
    return (
      <>
        <p id="quote">{this.state.quotes}</p>
        <button id="get-quote" value="1" onClick={this._click}>
          Vote for Swanson!
        </button>
      </>
    )
  }
}

export default Quotes
