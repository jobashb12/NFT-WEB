import React from 'react';
import Carousel from './Carousel';
import styled, { ThemeProvider } from 'styled-components';
import { dark } from '../Theme';
import Button from './Button';

const Main = styled.div`
width: 100%;
min-height: 100vh;
background-color: ${props => props.theme.text};
display: flex;
justify-content: center;
align-items: center;
position: relative;
`
const Container = styled.div`
width: 75%;
margin: 0 auto;
display: flex;
justify-content: center;
align-items: center;
@media (max-width: 70em) {
    width: 85%;
}
@media (max-width: 64em) {
    width: 100%;
    flex-direction: column;
    &>*:last-child{
        width: 80%;
    }
}
`
const Box = styled.div`
width: 50%;
height: 100%;
display: flex;
flex-direction: column;
@media (max-width: 64em){
    justify-content: center;
    align-items: center;
}
@media (max-width: 60em) {
    .btnContainer{
        margin-bottom: 5rem;
    }
}
@media (max-width: 40em){
    font-size: ${props => props.theme.fontsm};
    .btnContainer{
        margin-bottom: 0;
    }
}
@media (max-width: 48em) {
    min-height: 50vh;
    .btnContainer{
        margin-bottom: 0;
    }
}
`
const Heading = styled.h2`
font-size: ${props => props.theme.fontxxl};
color: ${props => props.theme.body};
width: 80%;
@media (max-width: 64em){
    width: 100%;
    text-align: center;
}
@media (max-width: 48em){
    font-size: ${props => props.theme.fontxl};
}
@media (max-width: 40em){
    font-size: 1.6em;
}
`
const Paragraph = styled.p`
font-size: ${props => props.theme.fontlg};
color: ${props => props.theme.body};
margin: .7rem 0;
width: 80%;
@media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontmd};
}
@media (max-width: 40em){
    font-size: ${props => props.theme.fontsm};
}
`
const SubPara = styled.p`
font-size: ${props => props.theme.fontmd};
color: rgba(255, 255, 255, 0.6);
width: 80%;
margin-bottom: 1rem;
@media (max-width: 64em){
    width: 100%;
    text-align: center;
    font-size: ${props => props.theme.fontsm};
}
@media (max-width: 40em){
    font-size: ${props => props.theme.fontxs};
}
`

const About = () => {
    return (
        <Main id='about'>
            <Container>
                <Box>
                    <Carousel />
                </Box>
                <Box>
                    <Heading>
                        Welcome To The Weirdos Club.
                    </Heading>
                    <Paragraph>
                        The WEIRDOS CLUB is a private collection of
                        NFTs—unique digital collectibles. The
                        Weirdos are stored as ERC-721 tokens
                        on the Ethereum blockchain and hosted on IPFS.
                    </Paragraph>
                    <br />
                    <SubPara>
                        With more than 200+ hand drawn traits, each NFT is
                        unique and comes with a membership to an exclusive
                        group of successful investors. Join an ambitiousever-
                        growing community with multiple benefits and utilities.
                    </SubPara>
                    <ThemeProvider theme={dark}>
                        <div className='btnContainer'>
                            <Button text='JOIN OUR DISCORD' />
                        </div>
                    </ThemeProvider>
                </Box>
            </Container>
        </Main>
    )
}

export default About;