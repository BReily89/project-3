import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'

class LogInPage extends Component {
    state = {
        users: []
    }

    componentWillMount() {
        this.getAllUsers()
    }

    getAllUsers = async () => {
        console.log('function hit')
        try {
            const res = await axios.get('/api/users')
            console.log(res)
            this.setState({ users: res.data })
        } catch (err) {
            console.log
        }
    }
   
    
    render() {
        return (
            <div>
                <h1>Log in</h1>
                <h3>Select an existing user to view their stats</h3>
                {this.state.users.map(user => {
                    return (<Link key={user._id} to={`/login/${user._id}/userinfo`}>{user.userName}</Link>)
                })}
                <SignUp />
            </div>
        );
    }
}

export default LogInPage;