import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
font-size: ${props => props.theme.fontsm};
color: ${props => props.theme.body};
background-color: ${props => props.theme.text};
border: none;
outline: none;
padding: 0.9rem 2.5rem;
border-radius: 50px;
cursor: pointer;
position: relative;
transition: all .2s ease;
&::after{
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) scale(0);
    border: 2px solid ${props => props.theme.text};
    width: 100%;
    height: 100%;
    border-radius: 50px;
    transition: all .2s ease;
}
&:hover{
    transform: scale(0.9);
}
&:hover::after{
    transform: translate(-50%, -50%) scale(1);
    padding: .3rem;
}
`

const Button = ({ text }) => {
    return (
        <Btn>{text}</Btn>
    )
}

export default Button;