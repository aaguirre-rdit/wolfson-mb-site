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
import BackgroundImage from 'gatsby-background-image'
import Navbar from './navbar';

import "./layout.css"
import * as background from "../images/comingsoon-bg.jpg"
interface Props {
  children?: any,
  location: any
}
const Screen = styled.div`
  height:100vh;
  margin:0;
  min-width:100vw;
  flex:1;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background:
  linear-gradient(
      rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.25)
    ),
  url(${background});
  background-repeat: no-repeat;
  background-attachment: cover;
  background-position: center;
  background-size:cover;
  color:white;
`;
const Main = styled.main`
  border-top: 1px solid white;
  border-bottom: 1px solid white;
  display:flex;
  flex-direction:column;
  align-items:center;
`
const VertLine = styled.div`
  height:${props => props.height}px;
  border:solid 0.5px white;
`
const Logo = styled.img`
  border-radius:100%;
  border:1px solid white;
  height:80px;
  width:80px;
  margin-bottom:0;
`
const Layout = ({ children } : Props) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const pathname = window.location.pathname;
  console.log(pathname)
  return (
    <Screen>
      {/*<Header siteTitle={data.site.siteMetadata.title} />*/}
        <Logo/>
        <VertLine height={40}/>
        <Main>{children}</Main>
        <VertLine height={50}/>
        <Navbar/>
        <footer>
          © {new Date().getFullYear()}, Wolfson College
          <br/>
          University of Cambridge
        </footer>

    </Screen>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
