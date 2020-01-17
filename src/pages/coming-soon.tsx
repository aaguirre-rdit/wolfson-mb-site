import React from 'react';
import styled, { keyframes } from 'styled-components';
import Layout from "../components/layout";
import * as background from '../images/comingsoon-bg.jpg';

import SEO from "../components/seo";

const Typo = styled.p`
  
  text-align:center;
  color:rgba(255,255,255,0.9);
  font-size:${props => props.type === 'title' ? '4em' : '2.5em'};
  text-shadow:2px 1px 10px rgba(0,0,0,0.5);
  font-family: ${props => props.type === 'title' ?'UnifrakturMaguntia' : 'Give You Glory'}, cursive;
  line-height:${props => props.type === 'title' ? '1.5em' : '1.3em'};
  @media (max-width: 580px) {
     font-size:${props => props.type === 'title' ? '3em' : '2em'};
  }
`


const  ComingSoon = (props) => {
    return(
    <Layout location={props.location} showStars={true}>

      <SEO title="Coming Soon" />

      <Typo type={'title'}>Wolfson May Ball 2020</Typo>
      <Typo type={'subtitle'}>Coming Soon</Typo>

    </Layout>

    )

}
export default ComingSoon;
