import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
//import SignUpForm from './SignUpForm'

class LogInPage extends Component {
    state = {
        users: []
    }

    componentsWillMount () {
        this.getAllUsers()
    }

    getAllUsers = async () => {
        try {
            const res = await axios.get('/api/users')
            this.setState({users: res.data})
        } catch (err) {
            console.log
        }
    }
    render() {
        return (
            <div>
                <h1>Log in</h1>
                <h3>Selece an existing user to view their workouts</h3>
                {this.state.users.map(user => {
                    return (<Link key={user._id} to={`/routines/${user._id}`}>{user.userName}</Link>)
                })}
                <SignUp />
            </div>
        );
    }
}

export default LogInPage;