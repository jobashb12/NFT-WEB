import React from 'react';
import styled, { keyframes } from 'styled-components';
import Typewriter from 'typewriter-effect';
import Button from './Button';
import GIF from '../assets/Home Video.mp4';
import RoundText from '../assets/Rounded-Text-Black.png';

const Rotate = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(-360deg);
}
`

const Main = styled.div`
width: 100%;
height: calc(100vh - 5rem);
`
const Center = styled.div`
width: 75%;
height: 80vh;
display: flex;
align-items: center;
margin: 0 auto;

@media (max-width: 64em) {
    width: 85%;
}
@media (max-width: 48em) {
    flex-direction: column-reverse;
    &>*:first-child{
        width: 100%;
        margin-top: 2rem;
    }
}
@media (max-width: 40em) {
    height: 70vh;
}
`
const Left = styled.div`
width: 50%;
@media (max-width: 40em) {
    width: 100%;
}
`
const LeftContainer = styled.div`
width: 80%;
@media (max-width: 48em) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}
@media (max-width: 40em) {
    width: 100%;
}
`
const Title = styled.div`
font-size: ${props => props.theme.fontxxl};
font-weight: 900;
span{
    text-transform: uppercase;
    font-family: 'Akaya Telivigala', cursive;
}
.text1{
    color: blue;
}
.text2{
    color: orange;
}
.text3{
    color: red;
}
@media (max-width: 70em) {
    font-size: ${props => props.theme.fontxl};
}
@media (max-width: 48em) {
    text-align: center;
}
@media (max-width: 40em) {
    width: 100%;
}
`
const SubTitle = styled.h2`
font-size: ${props => props.theme.fontlg};
color: ${props => `rgba(${props.theme.textRgba},0.6)`};
margin-bottom: 1rem;
@media (max-width: 40em) {
    font-size: ${props => props.theme.fontmd};
}
`
const Right = styled.div`
width: 50%;
video{
    width: 100%;
    height: auto;
}
@media (max-width: 64em) {
    min-width: 40vw;
}
`
const Circle = styled.div`
position: absolute;
width: 6rem;
height: 6rem;
bottom: 2rem;
right: 90%;
border-radius: 50%;
border: 1px solid #202020;
@media (max-width: 64em) {
    width: 4rem;
    height: 4rem;
    top: 1rem;
    right: 2rem;
}
@media (max-width: 48em) {
    right: 1rem;
}
`
const Round = styled.div`
width: 100%;
height: 100%;
img{
    width: 100%;
    height: 100%;
    animation: ${Rotate} 5s linear infinite;
}
`
const SubCircle = styled.div`
width: 50%;
height: 50%;
color: ${props => props.theme.body};
background-color: ${props => props.theme.text};
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
font-size: 2rem;
@media (max-width: 64em) {
    width: 2rem;
    height: 2rem;
    font-size: ${props => props.theme.fontlg};
}
`

const Home = () => {
    return (
        <Main id='home'>
            <Center>
                <Left>
                    <LeftContainer>
                        <Title>
                            Discover A New Era Of Cool
                            <Typewriter
                                options={{
                                    autoStart: true,
                                    loop: true
                                }}
                                onInit={(typewriter) => {
                                    typewriter.typeString(`<span class="text1">NFTs.</span>`)
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .start();
                                    typewriter.typeString(`<span class="text2">Collectible items.</span>`)
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .start();
                                    typewriter.typeString(`<span class="text3">Ape Killers!</span>`)
                                        .pauseFor(2500)
                                        .deleteAll()
                                        .start();
                                }}
                            />
                        </Title>
                        <SubTitle>Bored Of Apes? Try Something New.</SubTitle>
                        <Button text='Explore' />
                    </LeftContainer>
                </Left>
                <Right>
                    <video src={GIF} type="video/mp4" autoPlay muted loop />
                </Right>
            </Center>
            <Circle>
                <Round>
                    <img src={RoundText} alt='' />
                    <SubCircle>&#x2193;</SubCircle>
                </Round>
            </Circle>
        </Main >
    )
}

export default Home;