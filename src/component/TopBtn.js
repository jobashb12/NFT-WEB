import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Circle = styled.span`
position: fixed;
bottom: 1rem;
right: 1rem;
width: 3rem;
height: 3rem;
border-radius: 50%;
color: ${props => props.theme.text};
background-color: ${props => props.theme.carouselColor};
font-size: ${props => props.theme.fontxl};
display: none;
justify-content: center;
align-items: center;
cursor: pointer;
transition: all .2s ease;
&:hover{
    transform: scale(1.2);
}
&:active{
    transform: scale(.9);
}
`

const TopBtn = () => {
    const ref = useRef(null);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const y = window.pageYOffset;
            if (y > 200) {
                ref.current.style.display = 'flex';
            } else {
                ref.current.style.display = 'none';
            }
        });
    }, [])

    const scrollToTop = () => {
        const element = document.getElementById('nav');
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'

        });
    }

    return (
        <Circle onClick={scrollToTop} ref={ref}>
            &#x2191;
        </Circle>
    )
}

export default TopBtn;