import React, { Component } from 'react';
import axios from 'axios'
import ExerciseLibrary from './ExerciseLibrary'
import Exercise from './Exercise'
import { Link } from 'react-router-dom'

class Routines extends Component {
    state = {
        routines: []
    }
    componentWillMount () {
        this.getAllRoutines()
    }
    getAllRoutines = async () => {
        try {
            const res = await axios.get('/api/routines')
            this.setState({routines: res.data}) 
        }   catch (err) {
            console.log(err)
        }
        }
    render () {
        console.log(this.state.routines)
        return (
            <div>
 {/* user name?*/}   <h1>{this.state.user}'s Exercise Library</h1>
              {this.state.routines.map(routine => {
                   return (<Link key={routine._id} to={`/routines/${routine._id}/exercises`}>{routine.name}</Link>)
               })}
           

            </div>
        )
    }
}
export default Routines;
