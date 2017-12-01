import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import SignUp from './SignUp'
import styled from 'styled-components'
import { Redirect } from 'react-router-dom'

const Page = styled.div`
background-image: url(https://i.imgur.com/avN7Oq8.png);
height: 100vh;
background-size: cover;
`
const Button = styled.div`
font-size: 40px;
display: flex;
flex-direction: column;
font-size: 20px;
align-items: center;
`

const Title = styled.div`
display: flex;
flex-direction: column;
align-items:center;
color:white;
font-size: 40px;
align-self: auto;
text-shadow: 2px 2px 0px black;
`
const Heading = styled.div`
text-shadow: 2px 2px 0px black;
color: white;
display: flex;
flex-direction: column;
align-items:center;
`
const User = styled.div`
color: white;
text-shadow: 2px 2px 0px black;
a{
    color:white;
    display: flex;
    align-content: center;
}
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
                <Page>
                <Title>Log in or</Title>
                
                <Heading>Select an existing user to view their stats/routines</Heading>
               <User> {this.state.users.map(user => {
                    return (<Link key={user._id} to={`/login/${user._id}/userinfo`}>{user.userName}</Link>)
                })}</User>
                <Link to={'./ExerciseLibrary'} />
               <Button><button> <Link to={`/login/createuser`}>Create User</Link></button></Button>
               </Page>
               
            </div>
        );
    }
}

export default LogInPage;