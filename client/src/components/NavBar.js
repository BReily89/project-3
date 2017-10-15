import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div>
        <div>
            <Link to="/">Home</Link>
        </div>
        <div>
            <Link to="/login">Login</Link>
        </div>
        </div>
    )
}


export default NavBar