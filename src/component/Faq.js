import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import Accordian from './Accordian';
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Main = styled.div`
width: 100%;
height: auto;
background-color: ${props => props.theme.text};
overflow: hidden;
`
const Header = styled.h1`
font-size: ${props => props.theme.fontxxl};
margin: 0 auto;
padding-top: 1rem;
color: ${props => props.theme.body};
border-bottom: 2px solid ${props => props.theme.body};
width: fit-content;
padding-top: 6rem;

@media (max-width: 48em) {
    font-size: ${props => props.theme.fontxl};
}
`
const Container = styled.div`
height: auto;
width: 75%;
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin: 5rem auto;
&>*:last-child{
    &>*:first-child{
        padding-top: 0;
        margin-top: 0;
    }
}

@media (max-width: 64em) {
    width: 80%;
}
@media (max-width: 48em) {
    width: 90%;
    flex-direction: column;
}
`
const Box = styled.div`
width: 45%;

@media (max-width: 64em) {
    width: 90%;
    align-self: center;
}
`

const Faq = () => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        const element = ref.current;
        ScrollTrigger.create({
            trigger: element,
            start: 'top top',
            end: 'bottom top',
            pin: true,
            pinSpacing: false,
            scrub: true,
        })

        return () => {
            ScrollTrigger.kill();
        }
    })
    return (
        <Main id='faq' ref={ref}>
            <Header>FAQ</Header>
            <Container>
                <Box>
                    <Accordian heading="WHERE CAN I VIEW MY NFTS?" text="Once minted or bought simply connect to your OpenSea account to view your NFTs." />
                    <Accordian heading='WHAT IS THE METAVERSE?' text='A metaverse is a network of 3D virtual worlds focused on social connection. In futurism and science fiction, it is often described as a hypothetical iteration of the Internet as a single, universal virtual world that is facilitated by the use of virtual and augmented reality headsets.' />
                    <Accordian heading='WHY DO WE NEED ROYALTIES?' text="The amount of royalties was fixed at 5% to finance the Weirdos Club's projects. We have the ambition to organize multiple events around the world in order to strengthen the community and build a network of entrepreneurs and investors with the same mindset and common interests." />
                </Box>
                <Box>
                    <Accordian heading="HOW CAN I USE MY NFT?" text="You will be able to use your NFT as an avatar in the Metaverse and our future video game. Holding also means that you are part of an exclusive network of investors and entrepreneurs." />
                    <Accordian heading="WHAT ARE THE WEIRDOS?" text="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore deserunt consequatur quisquam maxime molestias dolores ipsum, exercitationem vel sint quidem aliquam modi quis impedit corporis unde inventore fugiat provident in." />
                    <Accordian heading="WHAT IS THE FUSION PROCESS?" text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel enim veritatis iusto officia. Exercitationem, ducimus reiciendis. Rem, maxime, similique neque minus aliquam dolore doloremque laboriosam, facilis quibusdam unde sint officia." />
                </Box>
            </Container>
        </Main>
    )
}

export default Faq;