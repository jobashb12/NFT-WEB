import React, { useLayoutEffect, useRef } from 'react';
import styled from 'styled-components';
import Vector from './Vector';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Container = styled.div`
position: absolute;
top: 0.5rem;
left: 47%;
width: 100%;
height: 100%;
overflow: hidden;
svg{
    width: 100%;
    height: 100%;
}
`

const DrawSvg = () => {
    const ref = useRef(null);
    gsap.registerPlugin(ScrollTrigger);

    useLayoutEffect(() => {
        let element = ref.current;
        let svg = document.getElementsByClassName("svg-path")[0];
        const length = svg.getBoundingClientRect();
    }, []);
    return (
        <Container ref={ref}>
            <Vector />
        </Container>
    )
}

export default DrawSvg;