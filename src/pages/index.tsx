import React, {useEffect} from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"
import * as silhouette from '../images/silhouette.png';
import styled from 'styled-components';

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
const IndexPage = (props) => {
  //useEffect(() => {navigate('/coming-soon')}, [])
  return(
    <Layout location={props.location} showStars={true}>
      <SEO title="Home" />
      <Title>
        <span
          style={{fontSize:'100px'}}
        >O</span>nce upon
        <br/>a Time<br/>
        in Wolfson
      </Title>
      <Subtitle>
        DD June 2020
      </Subtitle>
    </Layout>
  )
}

export default IndexPage
