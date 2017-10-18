import React, { Component } from 'react';
import axios from 'axios'
import Routines from './Routines'
import Exercise from './Exercise'
import { Link } from 'react-router-dom'




class ExerciseLibrary extends Component {
    state = {
            exercises: [],
            name: ''        
    
}
    async componentWillMount() {
        console.log(this)
        const exerciseId = this.props.match.params.routineId
        // console.log(exerciseId.exercise)
        const res = await axios.get(`/api/routines/${exerciseId}`)
        this.setState({ 
            exercises: res.data,
            name: res.data.name
         })
    
        console.log(res.data)
        
    }

    createNewRoutines = async () => {
        const { userId } = this.props.match.params
        const res = await axios.post(`/api/users/${userId}/routines`)
        console.log(res.data)
        this.setState({ user: res.data })
    }
    deleteRoutines = async (routinesId) => {
        const { userId } = this.props.match.params
        const id = routinesId
        const res = await axios.delete(`/api/users/${userId}/routines/${id}`)
        this.setState({ user: res.data })
    }
    handleChange = (event, routinesId) => {
        const { userId } = this.props.match.params
        const id = routinesId
    }
    updateRoutines = async (routinesId) => {
        const { userId } = this.props.params
        const id = routinesId

        const clonedUser = { ...this.state.user }
        const idea = clonedUser.ideas.find(i => i._id === routinesId)
        const res = await axios.patch(`api/users/${userId}/ideas/${id}`, {
             //routines: routines
        })
        this.setState({ user: res.data })

        
   }


  render() {
      console.log(this.state.exercises)
     return (
         <div> 
             <h1>{this.state.name}'s Exercise Library</h1>
             {this.state.exercise.map(exercise => {
             return (<Link key={exercise._id} to={`/exercies/${exercise._id}/exercises`}>{exercise.name}</Link>)}) 
             })}
             {this.state.exercises[0]}

             

         </div>
//     <div>
//     <h1>{}'s Exercise Library</h1>
//     <button onClick={this.createNewRoutine}>New Routine</button>
//         <Exercise exercises={this.state.exercises} 
//         handleChange={this.handleChange}
//         deleteRoutine={this.deleteRoutine}
//         updateRoutine={this.updateRoutine}/>
// </div>


 );
 }
}


export default ExerciseLibrary;