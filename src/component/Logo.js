import React from 'react';
import styled from 'styled-components';

const Sign = styled.h1`
color: #202020;
font-size: ${props => props.theme.fontxxxl};
font-family: 'Akaya Telivigala', cursive;
cursor: pointer;
transition: all .2s ease;
&:hover{
    transform: scale(1.1);
}
@media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxl};
}
`

const Logo = () => {
    return (
        <Sign>W.</Sign>
    )
}

export default Logo;