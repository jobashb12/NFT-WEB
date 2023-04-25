import React from 'react';
import styled from 'styled-components';
import Banner from './Banner';
import Logo from './Logo';
import { BsFacebook, BsTwitter, BsLinkedin } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';

const Main = styled.div`
width: 100%;
min-height: 100vh;
background-color: ${props => props.theme.body};
position: relative;
`
const Bottom = styled.div`
width: 75%;
margin: 0 auto;
margin-top: 2rem;
display: flex;
justify-content: space-between;
border-bottom: 1px solid #202020;
padding-bottom: 10px;
@media (max-width: 48em) {
    width: 80%;
}
@media (max-width: 40em) {
    width: 90%;
}
`
const Left = styled.div`
width: 50%;
@media (max-width: 48em) {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
`
const Container = styled.div`
width: fit-content;
display: flex;
flex-direction: column;
align-items: center;
`
const LogoContainer = styled.div`
width: fit-content;
`
const Icons = styled.span`
display: flex;
align-items: center;
margin-top: 12px;
span{
    font-size: 25px;
    display: inline-block;
    margin: 0 6px;
    cursor: pointer;
    &:nth-child(2){
        font-size: 29px;
    }
    &>*{
        transition: all .2s ease;
    }
    &>*:hover{
        transform: scale(1.2);
    }
}
`
const Right = styled.div`
width: 50%;
display: flex;
@media (max-width: 48em) {
    display: none;
}
`
const ItemList = styled.ul`
width: 50%;
list-style: none;
margin-top: 10px;
`
const List = styled.li`
margin-top: 13px;
cursor: pointer;
width: fit-content;
&::after{
    display: block;
    content: '';
    background-color: ${props => props.theme.text};
    width: 0;
    height: 2px;
    transition: all .3s ease;
}   
&:hover::after{
    width: 100%;
}
`
const BottomDetail = styled.div`
width: 75%;
margin: 0 auto;
margin-top: 1.9rem;
display: flex;
justify-content: space-between;
align-items: center;
@media (max-width: 48em) {
    flex-direction: column;
    align-items: center;
    width: 90%;
}
`
const CopyRight = styled.span`
display: inline-block;
@media (max-width: 40em) {
    font-size: ${props => props.theme.fontsm};
}
`
const MadeBy = styled.span`
display: inline-block;
@media (max-width: 40em) {
    font-size: ${props => props.theme.fontsm};
}
a{
    text-decoration: underline;
    cursor: pointer;
}
`

const Footer = () => {
    const scrol = (e) => {
        const element = document.getElementById(e);
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'

        });
    }

    return (
        <Main>
            <Banner />
            <Bottom>
                <Left>
                    <Container>
                        <LogoContainer>
                            <Logo />
                        </LogoContainer>
                        <Icons>
                            <span><BsFacebook /></span>
                            <span><AiFillInstagram /></span>
                            <span><BsTwitter /></span>
                            <span><BsLinkedin /></span>
                        </Icons>
                    </Container>
                </Left>
                <Right>
                    <ItemList>
                        <List onClick={() => scrol('home')}>Home</List>
                        <List onClick={() => scrol('roadmap')}>Roadmap</List>
                        <List onClick={() => scrol('team')}>Team</List>
                    </ItemList>
                    <ItemList>
                        <List onClick={() => scrol('about')}>About</List>
                        <List onClick={() => scrol('showcase')}>Showcase</List>
                        <List onClick={() => scrol('faq')}>Faq</List>
                    </ItemList>
                </Right>
            </Bottom>
            <BottomDetail>
                <CopyRight>
                    © {new Date().getFullYear()} Weirdos Club. All rights reserved.
                </CopyRight>
                <MadeBy>Made with ❤ by <a>JobashButt</a></MadeBy>
            </BottomDetail>
        </Main>
    )
}

export default Footer;