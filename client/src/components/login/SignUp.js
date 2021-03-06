import React, { Component } from 'react';
import axios from 'axios'
import styled from 'styled-components'

const Page = styled.div`
background-image: url(https://i.imgur.com/DokBQBq.jpg);
`

class SignUp extends Component {
        state = {
            newUser: {
                userName:'',
                password: ''
            },
            redirectToRoutines: false,
            newUserId: ''
        }
        handleChange = (event) => {
            const attribute = event.target.userName
            const updateUser =  {...this.state.newUser}

            updateUser[attribute] = event.target.value
            this.setState({newUser: updateUser})
        }
        handleSubmit = async (event) => {
            event.preventDefault()

            const res = await axios.post('/api/users', {
                'user': this.state.newUser
            })
            this.setState({redirectToExerciseLibrary: true, UserId: res.data._id})
        }
    render() {

        if (this.state.redirectToExerciseLibrary) {
            return <redirect to={'/exercises/${this.state.newUSerId'} />
        }
        return (
            <Page>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
            <div>
            <label htmlFor="userName">User Name</label>
            <input
            onChange={this.handleChange} name="userName"
            type="text" value={this.state.newUser.userName}
            />
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input onChange={this.handleChange}
                value={this.state.newUser.password}
                name="password" type="text" />
            </div>
            <button>Sign Up</button>
            </form>
            </Page>
           
        )
    }
}

export default SignUp;