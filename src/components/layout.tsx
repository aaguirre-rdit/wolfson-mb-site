/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from 'styled-components';
import Header from "./header";
import BackgroundImage from 'gatsby-background-image';
import Navbar from './navbar';
import { SocialIcon } from 'react-social-icons';
import '../styles/fireflies.scss';
import "./layout.css";
import * as background from "../images/comingsoon-bg.jpg"
interface Props {
  children?: any,
  showStars?: boolean
}
const Footer = styled.footer`
  bottom:0 !important;
  height:3rem;
  font-size:14px;
  margin-top:30px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
`
const Screen = styled.div`
  min-height:100vh;
  padding-top:2em;
  margin:0;
  width:100vw;
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-color:black;
  background:
  linear-gradient(
      rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.25)
    ),
  url(${background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size:cover;
  color:white;
`;
const Comps = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  z-index:1;
`
const Main = styled.main`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  display:flex;
  flex-direction:column;
  align-items:center;
  @media (max-width: 810px) {
    width: 95%;
  }
  width: 800px;
`
const VertLine = styled.div`
  height:${props => props.height}px;
  border:solid 0.5px white;
`
const SocialIconContainer = styled.div`
  flex:1;
  margin:20px 0;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  align-items:center;
  flex:1;
  svg:hover, a:hover{
    box-shadow:1px 1px 24px rgba(255,255,255,.5);
    height:30px;
    width:30px;
    background:transparent;
  }
`

const Logo = styled.img`
  border-radius:100%;
  border:1px solid white;
  min-height:80px;
  min-width:80px;
  margin-bottom:0;
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
  height:100vh;
  width:100vw;
  display:flex;
  justify-content:center;
  align-items:center;
  //transform: rotateZ(45deg);
  z-index:0;
`
const Layout = ({ children, showStars } : Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  let stars = [];
  for (let i = 0; i < 25; i++){
    // @ts-ignore
    stars.push(<div className={'firefly'} style={{
      // width:'10px',
      // height:'10px',
      top:Math.floor(Math.random() * Math.floor(100))+'%',
      left:Math.floor(Math.random() * Math.floor(100))+'%'
    }}/>)
  }
  return (
    <Screen>
      {showStars ?
        <Night className={'night'}>
          {stars.map(star=>star)}
        </Night>
        : undefined
      }
      {/*<Header siteTitle={data.site.siteMetadata.title} />*/}
      {/*<Comps>*/}

        <Logo/>
        <VertLine height={40}/>
        <Main>{children}</Main>
        <VertLine height={50}/>
        <Navbar/>
        <Footer>
          <SocialIconContainer>
            <SocialIcon
              style={{ height: 25, width: 25 }}
              url={'https://www.facebook.com/wolfsonmayball/'}
              bgColor={'white'}/>
            <SocialIcon
              style={{ height: 25, width: 25 }}
              url={'https://www.instagram.com/wolfsonmayball/'}
              bgColor={'white'}/>
          </SocialIconContainer>
          © {new Date().getFullYear()}, Wolfson College
          <br/>
          University of Cambridge
        </Footer>
      {/*</Comps>*/}
    </Screen>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
