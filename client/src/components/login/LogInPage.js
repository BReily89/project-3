import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import styled from 'styled-components'

const Log = styled.div`
display: flex;
align-items:center;
justify-content: spacebetween;
font-size: 40px;
`
const Log2 = styled.div`
display: flex;
align-items:center;
font-size: 25px;
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
            <div>
                <Log>Log in or</Log>
                <Log2>Select an existing user to view their stats</Log2>
                {this.state.users.map(user => {
                    return (<div><Link key={user._id} to={`/login/${user._id}/userinfo`}>{user.userName}</Link></div>)
                })}
                <SignUp />
            </div>
        );
    }
}

export default LogInPage;