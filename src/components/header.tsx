import React from "react";
import {Navbar, Nav, NavDropdown, Container} from "react-bootstrap";
import styled from 'styled-components';
import {SocialIcon} from 'react-social-icons';
import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
const Navigation = styled(Navbar)`
  z-index:2;
  font-family: Roboto, sans-serif;
  top:0 !important;
  position:absolute !important;
  width:100%;
  //background:rgba(255,255,255,0.3);
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
   font-size:18px !important;
   padding-bottom: .4125rem !important;
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
   font-size:14px;
   &:hover {
      text-shadow:1px -1px 3px rgba(0,0,0,.6);
      font-size:bold;
      transition:text-shadow .3s, font-size .3s;
      
   }
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
    <Brand href="/">Wolfson Mayball</Brand>
    <Toggle id='butt' aria-controls="responsive-navbar-nav">
      <MenuOutlinedIcon/>
    </Toggle>
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto">
        <Link href="/committee">Committee</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/apply">Apply to work</Link>
        <Link href="/gallery">Gallery</Link>
      </Nav>
      <Nav>
        <div>
        <SNIcon
          style={{ height: 25, width: 25, marginRight:'20px' }}
          url={'https://www.facebook.com/wolfsonmayball/'}
        />
        <SNIcon
          style={{ height: 25, width: 25 }}
          url={'https://www.instagram.com/wolfsonmayball/'}/>
        </div>
      </Nav>
    </Navbar.Collapse>
  </Navigation>)


export default Header
