import React, { Component } from 'react';
import axios from 'axios'
import Login from './LogInPage'
import { Redirect } from 'react-router-dom'

class UserPage extends Component {
    state={
        user: {} ,
            // userName:'',
            // password:'',
            // height:'',
            // weight:'',
            // personalRecord:''
        // },
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
        const userId =  this.props.match.params.id
        const res = await axios.patch(`/api/users/${userId}`, {
            user: this.state.user,
        })
        this.setState({ user: res.data, redirectToLogin : true})

    }
    hanndleChange = (event) => {
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
               
               <div>{this.state.user.userName}</div>
                <div>{this.state.user.height}</div>
                <div>{this.state.user.weight}</div>

                <input onBlur={this.updateUser}
                onChange={this.handleChange}
                name="personalRecord"
                value={this.state.user.personalRecord} />
               

            <button onClick={this.deleteUser}>Dude don't delete me</button>

            </div>
            
        );
    }
}

export default UserPage;