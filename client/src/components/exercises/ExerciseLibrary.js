import React, { Component } from 'react';
import axios from 'axios'
import Routines from './Routines'


class ExerciseLibrary extends Component {
    state={
        user: {
            userName:'',
            password: '',
            height: '',
            weight: '',
            personalRecords: ''

        }
    }
    async componentWillMount () {
        const { userId } = this.props.match.params
        const res = await axios.get(`api/users/${userId}`)
        this.setState({user: res.data})
    }

    createNewRoutines = async () => {
const { userId } = this.props.match.paramsi
const res = await axios.post(`/api/users/${userId}/routines`)
console.log(res.data)
this.setState({user: res.data})
}
deleteRoutines = async (routinesId) => {
    const { userId } = this.props.match.params
    const id = routinesId
    const res = await axios.delete(`/api/users/${userId}/routines/${id}`)
    this.setState({user: res.data})
}
    render() {
        return (
            <div>
                <h1>Exercise Library</h1>
            </div>
        );
    }
}

export default ExerciseLibrary;