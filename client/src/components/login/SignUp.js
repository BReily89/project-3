import React, { Component } from 'react';
import axios from 'axios'

class SignUp extends Component {
        state = {
            newUser: {
                userName:'',
                password: ''
            },
            redirectToRoutines: false,
            newUerId: ''
        }
        handleChange = (event) => {
            const attribute = event.target.userName
            const updateUser =  {...this.state.newUser}

        }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default SignUp;