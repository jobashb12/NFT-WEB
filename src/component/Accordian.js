import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const Main = styled.div`
width: 100%;
border-bottom: 1px solid ${props => props.theme.body};
padding: 1rem 7px;
cursor: pointer;
margin-bottom: 2.7rem;
`
const Head = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
.icon{
    color: rgba(255, 255, 255, 0.6);
    font-size: 23px;
}
`
const Title = styled.h2`
font-size: ${props => props.theme.fontsm};
color: ${props => props.theme.body};
font-weight: 400;
`
const Paragraph = styled.p`
color: rgba(255, 255, 255, 0.6);
font-size: ${props => props.theme.fontsm};
margin-top: 1rem;
`

const Accordian = ({ heading, text }) => {
    const [collapse, setCollapse] = useState(false);

    return (
        <Main>
            <Head onClick={() => setCollapse(!collapse)}>
                <Title>{heading}</Title>
                {collapse ? <AiOutlineMinus className='icon' /> : <AiOutlinePlus className='icon' />}
            </Head>
            {
                collapse &&
                <Paragraph>{text}</Paragraph>
            }
        </Main>
    )
}

export default Accordian;