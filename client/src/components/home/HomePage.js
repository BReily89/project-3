import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Barbells = styled.div`
background-image: url(https://i.imgur.com/DokBQBq.jpg);

`

class HomePage extends Component {

    render() {
        <div class="body">body</div>
        return (
            <Barbells>
                <h1>
                    Lazy-Lifter
                </h1>
            </Barbells>

        );
    }
}

export default HomePage;