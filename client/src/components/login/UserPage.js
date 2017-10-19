import React, { Component } from 'react';
import axios from 'axios'
import Login from './LogInPage'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

const Swole = styled.div`
display: flex;
flex-direction: column;
align-content: center;
font-size: 20px;
background: -webkit-linear-gradient(-262.8749836510982deg, rgba(255,255,255,0) 0, rgba(244,48,109,0) 34%, #F4306D 44%, #D53592 63%, #4258F5 100%), -webkit-radial-gradient(28% 142%, circle farthest-corner, rgba(255,104,177,0.1) 0, #FFFFFF 9%, #FBE18A 32%, #FBBB45 37%, #F88330 43%, #F86737 52%, #F8443E 57%, #F4306D 70%, #D53592 85%, #4258F5 100%), -webkit-linear-gradient(-18.43494882292201deg, rgba(255,255,255,0.49) 0, rgba(255,255,255,0.49) 57%, #F4306D 82%, #D53592 100%), -webkit-linear-gradient(-228deg, rgba(255,255,255,0) 0, rgba(255,255,255,0) 1%, #903ACD 49%, #903ACD 77%, rgba(144,58,205,0) 100%);
background: -moz-linear-gradient(352.8749836510982deg, rgba(255,255,255,0) 0, rgba(244,48,109,0) 34%, #F4306D 44%, #D53592 63%, #4258F5 100%), -moz-radial-gradient(28% 142%, circle farthest-corner, rgba(255,104,177,0.1) 0, #FFFFFF 9%, #FBE18A 32%, #FBBB45 37%, #F88330 43%, #F86737 52%, #F8443E 57%, #F4306D 70%, #D53592 85%, #4258F5 100%), -moz-linear-gradient(108.43494882292201deg, rgba(255,255,255,0.49) 0, rgba(255,255,255,0.49) 57%, #F4306D 82%, #D53592 100%), -moz-linear-gradient(318deg, rgba(255,255,255,0) 0, rgba(255,255,255,0) 1%, #903ACD 49%, #903ACD 77%, rgba(144,58,205,0) 100%);
background: linear-gradient(352.8749836510982deg, rgba(255,255,255,0) 0, rgba(244,48,109,0) 34%, #F4306D 44%, #D53592 63%, #4258F5 100%), radial-gradient(circle farthest-corner at 28% 142%, rgba(255,104,177,0.1) 0, #FFFFFF 9%, #FBE18A 32%, #FBBB45 37%, #F88330 43%, #F86737 52%, #F8443E 57%, #F4306D 70%, #D53592 85%, #4258F5 100%), linear-gradient(108.43494882292201deg, rgba(255,255,255,0.49) 0, rgba(255,255,255,0.49) 57%, #F4306D 82%, #D53592 100%), linear-gradient(318deg, rgba(255,255,255,0) 0, rgba(255,255,255,0) 1%, #903ACD 49%, #903ACD 77%, rgba(144,58,205,0) 100%);
`
const button = styled.div`
padding: 50px;
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
            <button onClick={this.deleteUser}>Dude don't delete me</button>
            </Swole>
            <div>
    
                 <h2><b>Edit User</b></h2>
          <br/>
          userName: <input onChange={this.handleChange} name="userName" value={this.state.user.userName} />
        
        <div>
          height: <input onChange={this.handleChange} name="height" value={this.state.user.height} />
        </div>
        <div>
          weight:<input onChange={this.handleChange} name="weight" value={this.state.user.weight} />
        </div>
        <div>
        personalRecord:<input onChange={this.handleChange} name="personalRecord" value={this.state.user.personalRecord} />
        </div>
        <button onClick={this.deleteUser}>Delete User</button>
        <button onClick={this.updateUser}>Save Changes</button>
            </div></div>
        
        );
    }
}

export default UserPage;