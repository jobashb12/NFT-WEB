import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import Logo from './Logo';

const Nav = styled.div`
width: 100%;
height: 5rem;
`
const Container = styled.div`
width: 85%;
height: 100%;
margin: 0 auto;
display: flex;
justify-content: space-between;
align-items: center;
.mobile{
    display: none;
}
@media (max-width: 64em){
    .desktop{
        display: none;
    }
    .mobile{
        display: inline-block;
    }
}
`
const Navbar = styled.ul`
display: flex;
align-items: center;
list-style: none;
@media (max-width: 64em){
position: fixed;
top: ${props => props.theme.navHeight};
left: 0;
bottom: 0;
background-color: ${props => `rgba(${props.theme.bodyRgba},0.85)`};
width: 100vw;
/* height: ${props => `clac(100vh - ${props.theme.navHeight})`}; */
height: calc(100vh - 5rem);
z-index: 50;
backdrop-filter: blur(2px);
flex-direction: column;
justify-content: center;
transform: ${props => props.click ? 'translateY(0)' : 'translateY(1000%)'};
transition: all .3s ease;
}
`
const Navlist = styled.li`
color: #202020;
margin: 0 1rem;
font-size: 1rem;
cursor: pointer;
text-transform: capitalize;
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
@media (max-width: 64em){
    margin: 1rem 0;
    &::after{
        display: none;
    }
}
`
const HamburgerMenu = styled.span`
width: ${props => props.click ? '2rem' : '1.5rem'};
height: 2px;
background-color: ${props => props.theme.text};
position: absolute;
top: 2rem;
left: 50%;
transform: ${props => props.click ? 'translateX(-50%) rotate(90deg)' : 'translateX(-50%) rotate(0)'};
display: none;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all .3s ease;
@media(max-width: 64em) {
    display: flex;
}
&::before{
    content: '';
    width: ${props => props.click ? '1rem' : '1.5rem'};
    height: 2px;
    bottom: ${props => props.click ? '.3rem' : '.5rem'};
    right: ${props => props.click ? '-2px' : '0'};
    position: absolute;
    background-color: ${props => props.theme.text};
    transform: ${props => props.click ? 'rotate(40deg)' : 'rotate(0)'};
    transition: all .3s ease;
}
&::after{
    content: '';
    width: ${props => props.click ? '1rem' : '1.5rem'};
    height: 2px;
    top: ${props => props.click ? '.3rem' : '.5rem'};
    right: ${props => props.click ? '-2px' : '0'};
    position: absolute;
    background-color: ${props => props.theme.text};
    transform: ${props => props.click ? 'rotate(-40deg)' : 'rotate(0)'};
    transition: all .3s ease;
}
`

const Navigation = () => {
    const [click, setClick] = useState(false);

    const scrol = (e) => {
        const element = document.getElementById(e);
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'

        });
    }
    return (
        <Nav id='nav'>
            <Container>
                <Logo />
                <HamburgerMenu click={click} onClick={() => setClick(!click)}>
                    &nbsp;
                </HamburgerMenu>
                <Navbar click={click}>
                    <Navlist click={click} onClick={() => scrol('home')}>home</Navlist>
                    <Navlist click={click} onClick={() => scrol('about')}>about</Navlist>
                    <Navlist click={click} onClick={() => scrol('roadmap')}>roadmap</Navlist>
                    <Navlist click={click} onClick={() => scrol('showcase')}>showcase</Navlist>
                    <Navlist click={click} onClick={() => scrol('team')}>team</Navlist>
                    <Navlist click={click} onClick={() => scrol('faq')}>faq</Navlist>
                    <Navlist>
                        <div className='mobile'>
                            <Button text='Connect Wallet' />
                        </div>
                    </Navlist>
                </Navbar>
                <div className='desktop'>
                    <Button text='Connect Wallet' />
                </div>
            </Container>
        </Nav>
    )
}

export default Navigation;