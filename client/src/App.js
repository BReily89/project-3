import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './components/home/HomePage'
import SignUp from './components/login/SignUp'
import LogInPage from './components/login/LogInPage'
{/*import NavBar from './components/NavBar'*/}

 

class App extends Component {
  render() {
    return (
      <Router> 
        <div>
        {/*  <NavBar /> */}
          <Switch>

            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LogInPage} />
           {/*} <Route exact path="/routine/:userId" component={RoutinePage} /> */}
          </Switch>
        </div>
      </Router>
     
    )
  }
}

export default App;
