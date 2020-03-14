import React, {useEffect} from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import * as mainlogo from '../images/handdrawn-03-transparent.png';
import styled from 'styled-components';
import {Container} from "react-bootstrap";
import Statement from '../components/statement.jsx';

const Title = styled.h1`
 font-family: UnifrakturMaguntia, cursive;
 font-size:70px;
 text-align:center;
 
`;

const Subtitle = styled.h3`
  font-family: Give You Glory, cursive;
  font-size:40px;
  text-align:center;
  font-weight:300;
  
`
const MainLogo = styled.div`
  height:300px !important;
  width:55%;
  > img {
    background-size: cover;
    background-position:center;
    background-repeat:no-repeat;
  }
   @media (max-width: 500px) {
    width: 100%;
  }
  margin-top:-30px;
  @media (max-width: 450px) {
    margin-top:-70px;
   margin-bottom:-50px;
  }
  
`
const IndexPage = (props) => {
  //useEffect(() => {navigate('/coming-soon')}, [])
  return(
    <Layout location={props.location} showStars={true}>
      <SEO title="Home" />
      <Statement/>
      <MainLogo>
      <img
        src={mainlogo}
      />
      </MainLogo>
      <Subtitle>
        19 June 2020
      </Subtitle>
    </Layout>
  )
}

export default IndexPage
