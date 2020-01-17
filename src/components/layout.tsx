/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled, {keyframes} from 'styled-components';
import Header from "./header";
import 'bootstrap/dist/css/bootstrap.min.css';
import { SocialIcon } from 'react-social-icons';
import '../styles/fireflies.scss';
import "./layout.css";
import * as background from "../images/comingsoon-bg.jpg"
import * as bare from '../images/comingsoon-bg-bare.jpg';
import * as cloud from '../images/cloud.png';
import '../styles/pixiedust.scss';

interface Props {
  children?: any,
  showStars?: boolean,
  location:object
}
const Footer = styled.footer`
  bottom:0 !important;
  left:0;
  margin-bottom:0;
  height:3rem;
  font-size:14px;
  display:flex;
  flex-direction:row;
  justify-content:space-around;
  min-width:100vw !important;
  align-items:center;
  position:${props => props.main ? 'absolute':'relative'};
  align-self:end;
  p {
    padding:0 20px;
    margin-bottom:0;
  }
  z-index:1;
`
const Screen = styled.div`
  min-height:100vh;
  padding-top:2em;
  font-family: Franklin Gothic;
  margin:0;
  width:100vw;
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-color:black;
  overflow-y:${props => props.bare? 'hidden':'auto'};
  seamless:seamless;
  background:
  linear-gradient(
      rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.25)
    ),
  url(${props => props.bare? bare: background});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;
  background-size:cover;
  color:white;
`;
const CloudAnim = keyframes`
  0% { 
    background-position:0px;
    }
  100% {
  background-position:5440px;
  }  
`
const Cloud = styled.div`
  min-height:100vh;
  min-width:100vw;
  position:absolute;
  background:url(${cloud});
  background-size:cover;
  top:0;
  left:0;
  animation:${CloudAnim} 60s linear infinite;
  opacity:0.3;
`
const Comps = styled.div`
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  z-index:1;
`
const Main = styled.main`
  // border-top: 1px solid white;
  // border-bottom: 1px solid white;
  display:flex;
  flex-direction:column;
  align-items:center;
  @media (max-width: 810px) {
    width: 95%;
  }
  width: 800px;
  margin-top:50px;
  background:${props => props.opaque ? 'rgba(0,0,0,.15)':undefined};
  box-shadow: ${props => props.opaque ? '0 0 5px 5px rgba(0,0,0,0.15)' :undefined};
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
  padding-top:30px !important;
  padding-left:20px;
  z-index:1;
`

const Logo = styled.img`
  border-radius:100%;
  border:1px solid white;
  min-height:80px;
  min-width:80px;
  margin-bottom:0;
`
const Night = styled.div`
  display:absolute;
  width:100vw;
  display:flex;
  justify-content:center;
  align-items:center;
  //transform: rotateZ(45deg);
  z-index:0;
`
const SNIcon = styled(SocialIcon)`
 g.social-svg-mask {
 fill:white !important;
  @media (max-width: 992px) { 
  fill: gray !important;
   }
   }
`
const Layout = ({ children, showStars, location } : Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  // @ts-ignore
  const isMain = location.pathname === '/' || location.pathname === '';
  //const opaque = location.pathname !== '/' && location.pathname !=='/coming-soon/';
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
    <Screen
      bare={!showStars}
    >
      {/*<Cloud/>*/}
      <Header/>
      {showStars ?
        <Night className={'night'}>
          {stars.map(star=>star)}
        </Night>
        : undefined
      }

        <Main opaque={false}>{children}</Main>

        <Footer
          main={isMain}
        >
          <div style={{marginLeft:'-14.5%'}}>
          <p style={{zIndex:1}}>© {new Date().getFullYear()}, Wolfson College
          <br/>
          University of Cambridge
          </p>
          </div>
          <div style={{marginRight:'-15%'}}>
            <SNIcon
              style={{ height: 25, width: 25, marginRight:'20px' }}
              url={'https://www.facebook.com/wolfsonmayball/'}
            />
            <SNIcon
              style={{ height: 25, width: 25 }}
              url={'https://www.instagram.com/wolfsonmayball/'}/>
          </div>
        </Footer>
    </Screen>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
