import React, { Component } from 'react';

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


export default NavBar;