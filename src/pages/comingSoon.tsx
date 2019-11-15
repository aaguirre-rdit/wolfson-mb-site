import React from 'react';
import styled from 'styled-components';
import * as background from '../images/comingsoon-bg.jpg';
const Screen = styled.div`
  height:100vh;
  width:100vw;
  margin:0;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  background-image:url(${background});
  background-repeat: no-repeat;
  background-attachment: cover;
  background-position: center;
  background-size:cover;
`;
const Typo = styled.p`
  color:rgba(255,255,255,0.9);
  font-size:${props => props.type === 'title' ? '5em' : '3em'};
  margin:2rem auto;
  text-shadow:2px 1px 10px rgba(0,0,0,0.5);
  font-family: ${props => props.type === 'title' ?'Italianno' : 'Give You Glory'}, cursive;
`
class ComingSoon extends React.Component{
  render(){
    return(
    <Screen>
      <Typo type={'title'}>Wolfson May Ball 2020</Typo>
      <Typo type={'subtitle'}>Coming Soon</Typo>
    </Screen>
    )
  }
}
export  default ComingSoon;
