import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const Button = styled.div`
font-size: 40px;
display: flex;
flex-direction: column;
align-content: center;
font-size: 20px;
`




const Title = styled.div`
display: flex;
flex-direction: column;
align-items:center;
font-size: 40px;
align-self: auto;
`
const Heading = styled.div`
display: flex;
flex-direction: column;
align-items:center;
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
                <Title>Log in or</Title>
                
                <Heading>Select an existing user to view their stats/routines</Heading>
                {this.state.users.map(user => {
                    return (<div><Link key={user._id} to={`/login/${user._id}/userinfo`}>{user.userName}</Link></div>)
                })}
                {/* <Link to={'./ExerciseLibrary'} /> */}
               <Button><button> <Link to={`/login/createuser`}>Create User</Link></button></Button>
               
            </div>
        );
    }
}

export default LogInPage;