import React, { Component } from 'react';
import axios from 'axios'
import ExerciseLibrary from './ExerciseLibrary'


class Routines extends Component {
    state={
        user: {
            userName: '',
            password: '',
            user: []
        }
    }
    async componentWillMount () {
        const { userId } = this.props.match,params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({user: res.data})
    }
    createNewUser = async () => {
        const { userId } = this.props.match.params
        const res = await axios.post(`/api/users/${userId}/routines`)
        console.log(res.data)
        this.setState({user: res.data})
    }
    render() {
        return (
            <div>
              <h1>Routines</h1>
            </div>
        );
    }
}

export default Routines;