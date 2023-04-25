import React from 'react';
import styled from 'styled-components';
import Item from './Item';

const Main = styled.div`
width: 100%;
height: 200vh;
`
const Container = styled.div`
height: 100%;
width: 70%;
margin: 0 auto;
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
const Detail = styled.div`
width: 100%;
height: 100%;
margin-top: 1rem;
`
const Items = styled.ul`
list-style: none;
margin-top: 10rem;
display: flex;
flex-direction: column;
@media (max-width: 48em) {
    padding-bottom: 0;
    &>*{
        width: 90%;
    }
}
&>*:nth-child(odd){
    align-self: flex-end;
    @media (max-width: 48em){
        align-self: center;
    }
}
&>*:nth-child(even){
    align-self: flex-start;
    text-align: end;
    border-radius: 50px 0 50px 0 !important;
    @media (max-width: 48em){
        align-self: center;
        border-radius: 0 50px 0 50px !important;
        text-align: start;
    }
&>*{
    border-radius: 50px 0 50px 0 !important;
    @media (max-width: 48em){
        border-radius: 0 50px 0 50px !important;
    }
}
}
`

const Roadmap = () => {
    return (
        <Main id='roadmap'>
            <Container>
                <Header>Roadmap</Header>
                <Detail>
                    <Items>
                        <Item title='Grand Opening' text='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
                        <Item title='Great Benefits' text='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
                        <Item title='Early Access' text='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
                        <Item title='New Merch' text='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
                        <Item title='Holders Ranking' text='Lorem Ipsum Dolor Sit Amet Consectetur, Adipisicing Elit. At Repellat Placeat, Adipisicing Elit. At Repellat Placeat.' />
                    </Items>
                </Detail>
            </Container>
        </Main>
    )
}

export default Roadmap;