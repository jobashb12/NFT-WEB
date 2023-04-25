import React, { useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import bighead1 from '../assets/Nfts/bighead-1.svg';
import bighead2 from '../assets/Nfts/bighead-2.svg';
import bighead3 from '../assets/Nfts/bighead-3.svg';
import bighead4 from '../assets/Nfts/bighead-4.svg';
import bighead5 from '../assets/Nfts/bighead-5.svg';
import bighead6 from '../assets/Nfts/bighead-6.svg';
import bighead7 from '../assets/Nfts/bighead-7.svg';
import bighead8 from '../assets/Nfts/bighead-8.svg';
import bighead9 from '../assets/Nfts/bighead-9.svg';
import bighead10 from '../assets/Nfts/bighead-10.svg';
import Eth from '../assets/icons8-ethereum-48.png';

const Slide = keyframes`
from{
    transform: translateX(100%);
}
to{
    transform: translate(-100%);
}
`

const Main = styled.div`
width: 100%;
min-height: 100vh;
background-color: ${props => props.theme.text};
margin-top: 11.5rem;
@media (max-width: 70em) and (min-width: 45em){
    margin-top: 20rem;
} 
`
const Container = styled.div`
width: 100%;
overflow: hidden;
`
const Cards = styled.div`
display: flex;
align-items: center;
margin: 2rem 0;
animation: ${Slide} ${props => props.type ? '15s' : '20s'} linear infinite ${props => props.type ? 'reverse' : ''};
@media (max-width: 30em) {
    animation: ${Slide} ${props => props.type ? '10s' : '15s'} linear infinite ${props => props.type ? 'reverse' : ''};
}
`
const Card = styled.div`
width: 30rem;
height: 20rem;
margin: 0 1rem;
cursor: pointer;
@media (max-width: 48em){
    width: 20rem;
}
@media (max-width: 30em){
    width: 20rem;
}
img{
    border-radius: 20px 20px 0 0;
    width: 100%;
    height: auto;
    background-color: ${props => props.theme.body};
}
`
const Description = styled.div`
width: 100%;
background-color: ${props => props.theme.text};
border: 2px solid rgba(255, 255, 255, 0.5);
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
display: flex;
justify-content: space-between;
align-items: center;
padding: .8rem 1rem;
margin-top: -.4rem;
`
const Left = styled.div`
width: 50%;
`
const Right = styled.div`
width: 50%;
text-align: right;
`
const Title = styled.h3`
font-size: ${props => props.theme.fontsm};
color:rgba(255, 255, 255, 0.5);

@media (max-width: 40em){
    font-size: 10px;
}
`
const Code = styled.p`
color: #fff;
font-size: ${props => props.theme.fontmd};
font-weight: 600;
margin-top: .3rem;

@media (max-width: 40em){
    font-size: ${props => props.theme.fontxs};
}
img{
    width: 1rem;
    background-color: #202020;
    @media (max-width: 40em){
    width: .8rem;
}
}
`


const List = ({ img, price, code, passRef }) => {

    const pause = () => {
        passRef.current.style.animationPlayState = 'paused';
    }
    const play = (e) => {
        passRef.current.style.animationPlayState = 'running';
    }

    return (
        <Card onMouseOver={() => pause()} onMouseOut={() => play()}>
            <img src={img} alt='' />
            <Description>
                <Left>
                    <Title>Weirdos</Title>
                    <Code>{code}</Code>
                </Left>
                <Right>
                    <Title>Price</Title>
                    <Code><img src={Eth} alt='' />{price}</Code>
                </Right>
            </Description>
        </Card>
    )
}

const Showcase = () => {
    let ref1 = useRef();
    let ref2 = useRef();

    return (
        <Main id='showcase'>
            <Container>
                <Cards ref={ref1}>
                    <List passRef={ref1} img={bighead1} code='#852' price='1.0' />
                    <List passRef={ref1} img={bighead2} code='#123' price='4.7' />
                    <List passRef={ref1} img={bighead3} code='#456' price='2.5' />
                    <List passRef={ref1} img={bighead4} code='#666' price='3.5' />
                    <List passRef={ref1} img={bighead5} code='#452' price='4.7' />
                </Cards>
                <Cards type='true' ref={ref2}>
                    <List passRef={ref2} img={bighead6} code='#888' price='1.2' />
                    <List passRef={ref2} img={bighead7} code='#211' price='3.2' />
                    <List passRef={ref2} img={bighead8} code='#455' price='1.8' />
                    <List passRef={ref2} img={bighead9} code='#456' price='5.1' />
                    <List passRef={ref2} img={bighead10} code='#865' price='3.7' />
                </Cards>
            </Container>
        </Main>
    )
}

export default Showcase;