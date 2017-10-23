import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const Nav = styled.div`
display:flex;
align-items:center;
flex-direction:row;
justify-content: space-between;
background: -webkit-linear-gradient(-262.8749836510982deg, rgba(255,255,255,0) 0, rgba(244,48,109,0) 34%, #F4306D 44%, #D53592 63%, #4258F5 100%), -webkit-radial-gradient(28% 142%, circle farthest-corner, rgba(255,104,177,0.1) 0, #FFFFFF 9%, #FBE18A 32%, #FBBB45 37%, #F88330 43%, #F86737 52%, #F8443E 57%, #F4306D 70%, #D53592 85%, #4258F5 100%), -webkit-linear-gradient(-18.43494882292201deg, rgba(255,255,255,0.49) 0, rgba(255,255,255,0.49) 57%, #F4306D 82%, #D53592 100%), -webkit-linear-gradient(-228deg, rgba(255,255,255,0) 0, rgba(255,255,255,0) 1%, #903ACD 49%, #903ACD 77%, rgba(144,58,205,0) 100%);
        background: -moz-linear-gradient(352.8749836510982deg, rgba(255,255,255,0) 0, rgba(244,48,109,0) 34%, #F4306D 44%, #D53592 63%, #4258F5 100%), -moz-radial-gradient(28% 142%, circle farthest-corner, rgba(255,104,177,0.1) 0, #FFFFFF 9%, #FBE18A 32%, #FBBB45 37%, #F88330 43%, #F86737 52%, #F8443E 57%, #F4306D 70%, #D53592 85%, #4258F5 100%), -moz-linear-gradient(108.43494882292201deg, rgba(255,255,255,0.49) 0, rgba(255,255,255,0.49) 57%, #F4306D 82%, #D53592 100%), -moz-linear-gradient(318deg, rgba(255,255,255,0) 0, rgba(255,255,255,0) 1%, #903ACD 49%, #903ACD 77%, rgba(144,58,205,0) 100%);
        background: linear-gradient(352.8749836510982deg, rgba(255,255,255,0) 0, rgba(244,48,109,0) 34%, #F4306D 44%, #D53592 63%, #4258F5 100%), radial-gradient(circle farthest-corner at 28% 142%, rgba(255,104,177,0.1) 0, #FFFFFF 9%, #FBE18A 32%, #FBBB45 37%, #F88330 43%, #F86737 52%, #F8443E 57%, #F4306D 70%, #D53592 85%, #4258F5 100%), linear-gradient(108.43494882292201deg, rgba(255,255,255,0.49) 0, rgba(255,255,255,0.49) 57%, #F4306D 82%, #D53592 100%), linear-gradient(318deg, rgba(255,255,255,0) 0, rgba(255,255,255,0) 1%, #903ACD 49%, #903ACD 77%, rgba(144,58,205,0) 100%);

`
const Home = styled.div`
font-color: white;
`

const NavBar = () => {
    return (
        <Nav>
        <div>
            <Home to="/">House of Gainz</Home>
        </div>
        <div>
            <Link to="/exerciseLibrary">Exercise Library</Link>
        </div>
        <div>
            <Link to="/login">Login</Link>
        </div>
        </Nav>
    )
}


export default NavBar