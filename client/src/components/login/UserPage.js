import React, { Component } from 'react';
import axios from 'axios'
import Login from './LogInPage'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Swole = styled.div`
background-image: url(https://i.imgur.com/avN7Oq8.png);
color: white;
text-shadow: 2px 2px 0px black;

`
const button = styled.div`
padding: 50px;
`
const Edit = styled.div`
background-image: url(https://i.imgur.com/RdoEGhu.jpg);
height: 100vh;
background-size: cover;
border: 1px solid white;
text-shadow: 2px 2px 0px black;
color:white;
align-content: center;


`
class UserPage extends Component {
    state={
        user: {} ,
       
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
    
    createUser = async () =>{
    try {
        console.log('here')
        const res = await axios.create(`api.users/${this.props.match.params.userId}`)
        console.log('here')
        this.setState({redirectToUsers: true})
    }catch(error) {
        console.log(error)
    }
    }
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
    updateUser = async () => {
        const userId =  this.props.match.params.userId
        const res = await axios.patch(`/api/users/${userId}`, {
            user: this.state.user,
        })
        this.setState({ user: res.data, redirectToLogin : true})

    }
    handleChange = (event) => {
        const attribute = event.target.name
        const clonedUser = {...this.state.user}
        clonedUser[attribute] = event.target.value
        this.setState({user: clonedUser})
    }
      render() {
          if (this.state.redirectToUsers) {
              return <Redirect to={`/login`} />
          }
        return (
            <div>
               <Swole>
               <div>{this.state.user.userName}</div>
                <div>{this.state.user.height}</div>
                <div>{this.state.user.weight}</div>
                <input onBlur={this.updateUser}
                onChange={this.handleChange}
                name="personalRecord"
                value= 
                {this.state.user.personalRecord} 
/>               
            <button onClick={this.deleteUser}>delete me</button>
            </Swole>
            <div>
    <Edit>
                 <h2><b>Edit User</b></h2>
          <br/>
          User Name: <input onChange={this.handleChange} name="userName" value={this.state.user.userName} />
        
        <div>
          Height: <input onChange={this.handleChange} name="height" value={this.state.user.height} />
        </div>
        <div>
          Weight:<input onChange={this.handleChange} name="weight" value={this.state.user.weight} />
        </div>
        <div>
        Personal Record:<input onChange={this.handleChange} name="personalRecord" value={this.state.user.personalRecord} />
        </div>
        <button onClick={this.deleteUser}>Delete User</button>
        <button onClick={this.updateUser}>Save Changes</button>
        </Edit>    </div> </div>
            
        
        );
    }
}

export default UserPage;