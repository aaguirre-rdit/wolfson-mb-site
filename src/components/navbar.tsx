import React from 'react';
import styled from 'styled-components';
import {string} from 'prop-types';
import { Link } from 'gatsby';
import {isMobile} from "../constants/responsive"

const Navigation = styled.div`
  border:1px solid white;
  border-radius:10px;
  display:flex;
  width:600px;
  @media (max-width: 580px) {
    flex-direction: column;
    width:80vw;
  }
  justify-content:center;
  align-items:center;
  padding:10px 0 !important;

  
`
const Item = styled.div`
  text-transform: uppercase;
  flex:1;
  text-align:center;
  font-size:14px !important;
  font-family:Roboto, sans-serif;
  padding:auto 15px;
  a{
    color:white;
    text-decoration:none;
    :hover{
      text-shadow:1px 1px 3px rgba(255,255,255, 0.5);
    }
  }
  
`
const ItemInterface = {
  title: string,
  url: string,
}
const NavItem = (ItemInterface) => {
  return (
    <Item>
      <Link to={ItemInterface.url}>
        {ItemInterface.title}
      </Link>
    </Item>
  )
}
const Navbar = () => {
  return (
    <Navigation>
      <NavItem title={'Home'} url={'/coming-soon'}/>
      <NavItem title={'Commitee'} url={'/commitee'}/>

    </Navigation>
  )
}

export default  Navbar;
