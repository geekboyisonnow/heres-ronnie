import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'
import meat from './images/meat-outline-filled.png'
import { Link, BrowserRouter as Router, Route } from 'react-router-dom'
// import Home from './Home'
import PhotoList from './PhotoList'
import Quotes from './Quotes'

class App extends Component {
  render() {
    return (
      <Router>
        <header className="App-header">
          <h1>
            Swans
            <img src={meat} className="App-logo" alt="logo" />
            nisms
          </h1>
        </header>
        <body>
          {/* <Route exact path="/" component={Home} /> */}
          <Route path="/" exact component={PhotoList} />
          <Route path="/" exact component={Quotes} />
        </body>
        <footer />
      </Router>
    )
  }
}

export default App
