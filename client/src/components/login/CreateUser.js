import React, { Component } from 'react';
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Create = styled.div`
background-image: url(https://i.imgur.com/DokBQBq.jpg);
`

class CreateUser extends Component {
    state = {
        users: [],
        redirectToUsers: false,
        userId: ''

    }
    handleChange = (event) => {
        const attribute = event.target.name
        const updateUser = { ...this.state.users }
        updateUser[attribute] = event.target.value
        this.setState({ users: updateUser })
    }
    handleSubmit = async (event) => {
        event.preventDefault()

        const res = await axios.post('/api/users', {
            'user': this.state.users
        })
        this.setState({ redirectToUsers: true, userId: res.data._id })
    }
    render() {
        if (this.state.redirectToUsers) {
            return <Redirect to={`/login`} />
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit} >
                    <div>
                        <label htmlFor="userName">Your Name:</label>
                        <input
                            onChange={this.handleChange} name="userName"
                            type="text" value={this.state.users.userName} />

                    </div>
                    <Create>
                    <div>
                        <label htmlFor="height">height</label>
                        <input
                            onChange={this.handleChange} name="height"
                            type="text" value={this.state.users.height} />
                    </div>
                    <div>
                        <label htmlFor="weight">weight:</label>

                        <input onChange={this.handleChange} name="weight"
                            type="text" value={this.state.users.weight} />
                    </div>
                    <div>
                        <label htmlFor="personalRecords">personal records</label>
                    <input
                        onChange={this.handleChange} name="personalRecord"
                        type="text" value={this.state.users.personalRecords} />
                        </div>
                    <button>Submit</button>
               </Create>
                </form>
            
            </div>
        );
    }
}

export default CreateUser;