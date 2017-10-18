import React, { Component } from 'react';
import axios from 'axios'
import Login from './LogInPage'
import { Redirect } from 'react-router-dom'

class UserPage extends Component {
    state={
        user:{
            userName:'',
            password:'',
            height:'',
            weight:'',
            personalRecords:''
        },
        redirectToUsers: false
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
    deleteUser = async () => {
        try {
            console.log('in here')
            const res = await axios.delete(`/api/users/${this.props.match.params.userId}`)
            console.log('in here')
            
            this.setState({redirectToUsers: true})
        } catch(error) {
            console.log(error)
        }
        
    }
    // updateUser = async (userId) => {
    //     const { userId } =  this.props.match.params
        
    //     const clonedUser = {...this.state.user}
    //     const user
    // }  
    
      render() {
          if (this.state.redirectToUsers) {
              return <Redirect to={`/login`} />
          }
        return (
            <div>
               
               <div>{this.state.user.userName}</div>
                <div>{this.state.user.height}</div>
                <div>{this.state.user.weight}</div>
                <div>{this.state.user.personalRecords}</div>
            <button onClick={this.deleteUser}>Dude don't delete me</button>
            </div>
        );
    }
}

export default UserPage;