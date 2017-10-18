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
    componentWillMount () {
       this.getUser()
    }
    getUser = async () => {
        try {
            
            const {userId} = this.props.match.params
            console.log(userId)
            const res = await axios.get(`/api/users/${userId}`)
            console.log(res)
            this.setState({ user: res.data })
            console.log(this.state.user)
        } catch (err) {
            console.log
        }
    }
    

    //make a new user and an onClick to create new user with data
    // createNewUser = async () => {
    //     const { userId } = this.props.match.params
    //     const res = await axios.post(`api/users/${userId}`)
    //     console.log(res.data)
    //     this.setState({user: res.data})
    // }
    // deleteUser = async (userId) => {
    //     const res = await axios.delete(`api/users${userId}`)
    //     this.setState({user: res.data})
    // }
    // updateUser = async (userId) => {
    //     const { userId } =  this.props.match.params
        
    //     const clonedUser = {...this.state.user}
    //     const user
    // }  
    
      render() {
        return (
            <div>
               Test
               {this.state.user.userName}
            </div>
        );
    }
}

export default UserPage;