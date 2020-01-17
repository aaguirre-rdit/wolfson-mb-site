import React from "react";
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import styled, { keyframes } from 'styled-components';
import {SocialIcon} from 'react-social-icons';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import '../styles/pixiedust.scss';
import * as logo from '../images/logo.png';
const Navigation = styled(Navbar)`
  z-index:2;
  font-family: Roboto, sans-serif;
  top:0 !important;
  position:absolute !important;
  width:100%;
  left:0;
  & .collapse .show{
    background:red;
  }
  
  @media (max-width: 992px) { 
  * > *> a {
    color:black }
    button.collapsed {
      border-color:gray;
    }
   background:white !important;
   color:black !important;
   button.collapsed{
    color:black;
   }
   
   }
`

const Brand = styled(Navbar.Brand)`
  @media (max-width: 992px) { 
   color:black !important;
   }
   font-size:20px !important;
   padding-bottom: 1rem !important;
   background:url(${logo});
   background-size:70px;
   background-repeat:no-repeat;
   height:70px;
   width:70px;
   opacity:.75;
`
const Toggle = styled(Navbar.Toggle)`
@media (max-width: 992px) { 
   color:#2a2a2a !important;
   }
`
const Link = styled(Nav.Link)`
  @media (max-width: 992px) { 
   color:#2a2a2a !important;
   }
   font-size:18px;
   &:hover, &:active, &:visited {
      text-shadow:1px -1px 3px rgba(0,0,0,.6);
      font-size:bold;
      transition:text-shadow .3s, font-size .3s;
   }
   color:${props => props.disabled? 'grey': undefined};s
  
   
`
const SNIcon = styled(SocialIcon)`
 g.social-svg-mask {
 fill:white !important;
  @media (max-width: 992px) { 
  fill: gray !important;
   }
   }
`

const Header = () => (
  <Navigation
    //fixed={'top'}
    className={'navbar-header'}
    collapseOnSelect expand="lg"
    variant="dark">

    <Toggle id='butt' aria-controls="responsive-navbar-nav">
      <MenuOutlinedIcon/>
    </Toggle>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav
        style={{
          flex:1,
          width:'100vw',
          justifyContent:'space-around'
        }}
        className="mr-auto">
        <div
          style={{
            flex:1,
            display:'flex',
            justifyContent:'space-around',
            maxWidth:'300px'
          }}
        >
        <li><Link href="/">Wolfson Mayball</Link></li>
        <li><Link href="/committee">Committee</Link></li>
        </div>

        <Brand href="/">
        </Brand>
      <div
        style={{
          flex:1,
          display:'flex',
          justifyContent:'space-around',
          maxWidth:'300px'

        }}
      >
        <li><Link href="/tickets">Tickets</Link></li>
        {/*<li><Link href="/apply">Apply to work</Link></li>*/}

        <li><Link disabled={true} href="">Apply to work</Link></li>
        <li><Link href="/gallery">Gallery</Link></li>
      </div>
        {/*<div>*/}
          {/*<SNIcon*/}
            {/*style={{ height: 25, width: 25, marginRight:'20px' }}*/}
            {/*url={'https://www.facebook.com/wolfsonmayball/'}*/}
          {/*/>*/}
          {/*<SNIcon*/}
            {/*style={{ height: 25, width: 25 }}*/}
            {/*url={'https://www.instagram.com/wolfsonmayball/'}/>*/}
        {/*</div>*/}
      </Nav>
    </Navbar.Collapse>
  </Navigation>)


export default Header
