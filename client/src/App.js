import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import HomePage from './components/home/HomePage'
import SignUp from './components/login/SignUp'
import LogInPage from './components/login/LogInPage'
import Routines from './components/exercises/Routines'
import ExerciseLibrary from './components/exercises/ExerciseLibrary'
import NavBar from './components/NavBar'
import UserPage from './components/login/UserPage'
import CreateUser from './components/login/CreateUser'

 

class App extends Component {
  render() {
    return (
      <Router> 
        <div>
         <NavBar /> 
          <Switch>

            <Route exact path="/" component={HomePage} />
            <Route exact path="/login" component={LogInPage} />
            <Route exact path="/login/createuser" component={CreateUser} />
            <Route exact path="/login/:userId/userinfo" component={UserPage} />
            <Route exact path="/routines/:userId" component={Routines} /> 
            <Route exact path="/routines/:routineId/exercises" component={ExerciseLibrary} />
          </Switch>
        </div>
      </Router>
     
    )
  }
}

export default App;
