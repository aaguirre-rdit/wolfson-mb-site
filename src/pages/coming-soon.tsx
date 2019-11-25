import React from 'react';
import styled, { keyframes } from 'styled-components';
import Layout from "../components/layout";
import * as background from '../images/comingsoon-bg.jpg';
import  '../styles/stars.scss';

import SEO from "../components/seo";
const Screen = styled.div`
  height:100vh;
  margin:0;
  min-width:100vw;
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-image:url(${background});
  background-repeat: no-repeat;
  background-attachment: cover;
  background-position: center;
  background-size:cover;
`;
const Typo = styled.p`
  text-align:center;
  color:rgba(255,255,255,0.9);
  font-size:${props => props.type === 'title' ? '4em' : '2.5em'};
  text-shadow:2px 1px 10px rgba(0,0,0,0.5);
  font-family: ${props => props.type === 'title' ?'Great Vibes' : 'Give You Glory'}, cursive;
  line-height:${props => props.type === 'title' ? '1.5em' : '1.3em'};
  @media (max-width: 580px) {
     font-size:${props => props.type === 'title' ? '3em' : '2em'};
  }
`

const glowKeyframes = keyframes`
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
   `
const Star = styled.div`
  position: absolute;
  height: 2px;
  background: linear-gradient(-45deg, rgba(250, 255, 222, 0.5), rgba(0, 0, 255, 0));
  border-radius: 999px;
  filter: drop-shadow(0 0 6px rgba(250, 255, 222, 0.5));
  animation:
    tail 3000ms ease-in-out infinite,
    shooting 3000ms ease-in-out infinite;
`;
const Night = styled.div`
  display:absolute;
  transform: rotateZ(45deg);
  z-index:0;
`
const  ComingSoon = () => {
    let stars = [];
    for (let i = 0; i < 5; i++){
      // @ts-ignore
      stars.push(<Star className={'shooting-star'} style={{
        top:Math.floor(Math.random() * Math.floor(100))+'%',
        left:Math.floor(Math.random() * Math.floor(100))+'%'
      }}/>)
    }
    return(
    <Layout>
      <Night className={'night'}>
        {stars.map(star=>star)}
      </Night>
      <SEO title="Coming Soon" />

      <Typo type={'title'}>Wolfson May Ball 2020</Typo>
      <Typo type={'subtitle'}>Coming Soon</Typo>

    </Layout>

    )

}
export default ComingSoon;
