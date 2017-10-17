import React, { Component } from 'react';
import axios from 'axios'
import Routines from './Routines'



class ExerciseLibrary extends Component {
    state = {
        users: {
            userName: '',
            password: '',
            height: '',
            weight: '',
            personalRecords: ''

        }
        
    }
    
    async componentWillMount() {
        const { userId } = this.props.match.params
        const res = await axios.get(`api/users/${userId}`)
        //console.log(res.data)
        this.setState({ user: res.data })
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
     return (
    <div>
    <h1>{this.state.user.userName}'s Exercise Library</h1>
    <button onClick={this.createNewRoutine}>New Routine</button>
        <Routines exercises={this.state.user.exercises}
        handleChange={this.handleChange}
        deleteRoutine={this.deleteRoutine}
        updateRoutine={this.updateRoutine}/>
</div>


 );
 }
}


export default ExerciseLibrary;