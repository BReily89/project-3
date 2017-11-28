import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Nav = styled.div`
display:flex;
background-color: black;
align-items:center;
flex-direction:row;
justify-content: space-between;
font-color: white;

`
const Home = styled.div`
color: white;
`
const Link1 = styled.div`
color: white;

`
const Link2 = styled.div`
color: white;
`
const Link3 = styled.div`
color: white;
`


const NavBar = () => {
    return (
        <Nav>
        <div>
            <Home to="/">House of Gainz</Home>
        </div>
        <Link1>
            <a href to="/exerciseLibrary">Exercise Library</a>
        </Link1>
        <Link2>
            <a href to="/login">Login</a>
        </Link2>
        <Link3> <a href to="/HomePage">Back</a>
        </Link3>
        </Nav>
    )
}


export default NavBar