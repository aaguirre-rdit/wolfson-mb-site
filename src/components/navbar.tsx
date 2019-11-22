import React from 'react';
import styled from 'styled-components';
import {string} from 'prop-types';
import { Link } from 'gatsby';
import {isMobile} from "../constants/responsive"

const Navigation = styled.div`
  border:1px solid white;
  border-radius:10px;
  display:flex;
  width:${isMobile()? Math.floor(0.8* window.outerWidth) : '500px'};
  flex-direction:${isMobile()? 'column': 'row'};
  justify-content:center;
  align-items:center;
  
`
const Item = styled.div`
  flex:1;
  text-align:center;
  padding:auto 15px;
  a{
    color:white;
    text-decoration:none;
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
      <NavItem title={'Commitee'} url={'/page-2'}/>

    </Navigation>
  )
}

export default  Navbar;
