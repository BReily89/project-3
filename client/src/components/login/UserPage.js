import React, { Component } from 'react';
import axios from 'axios'
import Login from './LogInPage'

class UserPage extends Component {
    state={
        user:{
            userName:'',
            password:'',
            height:'',
            weight:'',
            personalRecords:''
        }
    }

    //render user info
    async componentWillMount () {
        const { userId } =this.props.match.params
        const res = await axios.get(`/api/users/${userId}`)
        this.setState({user: res.data})
        console.log(res.data)
        this.setState({user: res.data})
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

    //make a new user and an onClick to create new user with data
    createNewUser = async () => {
        const { userId } = this.props.match.params
        const res = await axios.post(`api/users/${userId}`)
        console.log(res.data)
        this.setState({user: res.data})
    }
    deleteUser = async (userId) => {
        const res = await axios.delete(`api/users${userId}`)
        this.setState({user: res.data})
    }
    // updateUser = async (userId) => {
    //     const { userId } =  this.props.match.params
        
    //     const clonedUser = {...this.state.user}
    //     const user
    // }  
    
      render() {
        return (
            <div>
                <h1>{this.state.user.userName}'s stats</h1>
                <button onClick={this.createNewUser}>New User</button>
                <UserPage users={this.state.user}
                handleChange={this.handleChange}
                updateUser={this.updateUser} />
            </div>
        );
    }
}

export default UserPage;