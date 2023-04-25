import React from 'react';
import styled from 'styled-components';

const Container = styled.li`
width: 45%;
border: 3px solid #202020;
border-radius: 0 50px 0 50px;
padding: 1rem;
margin: 2rem 0;
@media (max-width: 64em){
    width: 55%;
}
@media (max-width: 48em){
    width: 95%;
}
`
const Wrap = styled.span`
display: inline-block;
border: 1px solid #202020;
border-radius: 0 50px 0 50px;
padding: 1rem;
background-color: ${props => props.theme.carouselColor};
`
const Title = styled.h2`
font-size: ${props => props.theme.fontxl};
font-weight: 400;
@media (max-width: 48em){
font-size: ${props => props.theme.fontlg};
font-weight: 600;
}
`
const Text = styled.p`
font-size: ${props => props.theme.fontsm};
margin-top: .4rem;
@media (max-width: 48em){
font-size: ${props => props.theme.fontxs};
}
`
const Item = ({ title, text }) => {
    return (
        <Container>
            <Wrap>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </Wrap>
        </Container>
    )
}

export default Item