import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import HomePage from './components/home/HomePage'
import NavBar from './components/NavBar'
import LogInPage from './components/login/LogInPage'
 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Lazy-Lifter</h1>
        </header>
        <p className="App-intro">
          Hello World <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
