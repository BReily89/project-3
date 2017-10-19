import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import styled from 'styled-components'



const Log = styled.div`
flex-direction: columns;
align-items:center;
font-size: 40px;
align-self: auto;
`

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
            <Log>
                <h1>Log in or</h1>
                <h3>Select an existing user to view their stats</h3>
                {this.state.users.map(user => {
                    return (<div><Link key={user._id} to={`/login/${user._id}/userinfo`}>{user.userName}</Link></div>)
                })}
                <SignUp />
            </Log>
        );
    }
}

export default LogInPage;