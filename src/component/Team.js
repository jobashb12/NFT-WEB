import React from 'react';
import styled from 'styled-components';
import bighead1 from '../assets/Nfts/bighead-1.svg';
import bighead3 from '../assets/Nfts/bighead-3.svg';
import bighead4 from '../assets/Nfts/bighead-4.svg';
import bighead5 from '../assets/Nfts/bighead-5.svg';
import bighead6 from '../assets/Nfts/bighead-6.svg';
import bighead7 from '../assets/Nfts/bighead-7.svg';
import bighead8 from '../assets/Nfts/bighead-8.svg';
import bighead9 from '../assets/Nfts/bighead-9.svg';
import bighead10 from '../assets/Nfts/bighead-10.svg';
import Confettis from './Confetti';

const Main = styled.div`
width: 100%;
min-height: 100vh;
position: relative;
`
const Header = styled.h1`
font-size: ${props => props.theme.fontxxl};
margin: 0 auto;
padding-top: 1rem;
color: ${props => props.theme.text};
border-bottom: 2px solid ${props => props.theme.text};
width: fit-content;

@media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
}
`
const Container = styled.div`
height: 100%;
width: 75%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin: 1.5rem auto;
`
const Frame = styled.div`
width: calc(20rem - 4vw);
border: 2px solid ${props => props.theme.text};
border-radius: 20px;
display: flex;
flex-direction: column;
align-items: center;
margin: 2rem auto;
z-index: 5;
backdrop-filter: blur(4px);
`
const ImgContainer = styled.div`
width: 93%;
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.carouselColor};
margin: 1rem auto;
border-radius: 20px;
border: 1px solid ${props => props.theme.text};
cursor: pointer;
&:hover >*{
    transform: translateY(-2rem) scale(1.2);
}
img{
    width: 85%;
    height: auto;
    margin: 1rem auto;
    transition: all .3s ease;
}
`
const Name = styled.h1`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.text};
`
const Title = styled.p`
color: ${props => props.theme.text};
margin-bottom: 1rem;
`

const Card = ({ avatar, name, title }) => {
    return (
        <Frame>
            <ImgContainer>
                <img src={avatar} alt={avatar} />
            </ImgContainer>
            <Name>{name}</Name>
            <Title>{title}</Title>
        </Frame>
    )
}

const Team = () => {
    return (
        <Main id='team'>
            <Confettis />
            <Header>Team</Header>
            <Container>
                <Card avatar={bighead1} name='SKYBLAZE' title='Founder' />
                <Card avatar={bighead10} name='MEGNUM' title='Co-Founder' />
                <Card avatar={bighead3} name='MONKEY KING' title='Director' />
                <Card avatar={bighead4} name='BLACK PANTHER' title='Manager' />
                <Card avatar={bighead5} name='DEATHSTROKE' title='Artist' />
                <Card avatar={bighead6} name='LAZY KONG' title='Social Media Manage' />
                <Card avatar={bighead7} name='CYBER PUNK' title='Blockchain Specialist' />
                <Card avatar={bighead8} name='MONK' title='Web3 Developer' />
                <Card avatar={bighead9} name='BANANA' title='Graphic Designer' />
            </Container>
        </Main>
    )
}

export default Team;