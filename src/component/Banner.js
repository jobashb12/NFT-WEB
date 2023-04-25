import React from 'react';
import styled from 'styled-components';
import bighead6 from '../assets/Nfts/bighead-6.svg';
import bighead7 from '../assets/Nfts/bighead-7.svg';
import bighead2 from '../assets/Nfts/bighead-2.svg';
import bighead3 from '../assets/Nfts/bighead-3.svg';
import bighead4 from '../assets/Nfts/bighead-4.svg';
import bighead5 from '../assets/Nfts/bighead-5.svg';

const Main = styled.div`
width: 100%;
height: 25rem;
background-color: ${props => `rgba(${props.theme.textRgba},0.9)`};
display: flex;
justify-content: space-between;
align-items: center;
position: relative;
`
const ImgContainer = styled.div`
width: 15rem;
height: auto;
opacity: .2;
img{
    width: 100%;
}
`
const Container = styled.div`
position: absolute;
width: 70%;
height: 100%;
top: 0;
left: 50%;
transform: translateX(-50%);
display: flex;
justify-content: space-between;
align-items: center;
z-index: 5;
@media (max-width: 48em) {
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
}
`
const Title = styled.h1`
font-size: ${props => props.theme.fontxxxl};
color: ${props => props.theme.body};
@media (max-width: 64em) {
    font-size: ${props => props.theme.fontxxl};
}
@media (max-width: 40em) {
    font-size: ${props => props.theme.fontxl};
}
`
const Btn = styled.button`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.text};
background-color: ${props => props.theme.body};
font-weight: 600;
border: none;
outline: none;
padding: 1.5rem 3.1rem;
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
    border: 2px solid ${props => props.theme.body};
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

@media (max-width: 48em) {
    padding: 1rem 2.4rem;
}
`

const Banner = () => {
    return (
        <Main>
            <ImgContainer>
                <img src={bighead7} alt='' />
            </ImgContainer>
            <ImgContainer>
                <img src={bighead6} alt='' />
            </ImgContainer>
            <ImgContainer>
                <img src={bighead2} alt='' />
            </ImgContainer>
            <ImgContainer>
                <img src={bighead3} alt='' />
            </ImgContainer>
            <ImgContainer>
                <img src={bighead4} alt='' />
            </ImgContainer>
            <ImgContainer>
                <img src={bighead5} alt='' />
            </ImgContainer>
            <Container>
                <Title>Join The
                    <br />Weirdos Club
                </Title>
                <Btn>Join Now</Btn>
            </Container>
        </Main>
    )
}

export default Banner;