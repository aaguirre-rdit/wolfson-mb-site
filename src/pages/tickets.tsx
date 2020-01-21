import React from "react"
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo";
import Countdown from 'react-countdown-now';
import TandC from '../data/T&C_WCMB2020.pdf';
const IFrame = styled.iframe`
  width:100% !important;
  height:500px !important;
  margin-top:-100px;
  border:1px solid rgba(255,255,255,0.5);
   @media (max-width: 600px) {
    width: 100vw !important;
    height:100vh !important;
    margin-top:50px;

  }
  @media (max-width: 800px) {
    width: 100vw !important;
    height:600px !important;
  }
  
  background:transparent !important;
  border-color:transparent !important;
  .ticketWidget{
    border-color:none !important;
  }
`
const CountdownContainer = styled.div`
  display:flex;
  justify-content:center;
  width:300px;
  align-items:center;
  > div{
    height:75px;
    border-radius:10px;
    border:1px solid rgba(255,255,255,0.7) !important;
    font-size:2.5rem;
    color:rgba(255,255,255,0.7);
    flex:1;
    font-weight:bolder;
    text-align:center;
    font-family:'Pinyon Script', cursive;
    margin:0 5px;
    > p{
      font-size:.7rem;
      font-weight:300;
      margin-top:-15px;
      font-family: Roboto, sans-serif;
    }
  }
`
const openDate = new Date(2020, 0, 21, 18);

const renderer = ({ days,hours, minutes, seconds, completed }) => {

  if (completed) {
    // Render a completed state
    return
      <>
        <IFrame className='ticketWidget'
                src="https://fixr.co/event/813970428?compact=true&dark=false">
        </IFrame>
        <a href={TandC} target={'_blank'}>Terms and conditions</a>
      </>;
  } else {
    // Render a countdown
    return <div style={{
      height:'70vh',
      display:'flex',
      justifyContent:'center',
      flexDirection:'column',
      alignItems:'center'
    }}>
      <h5
        style={{
          fontSize:'2rem',
          textAlign:'center',
          fontWeight:300
        }}
      >The ticket sales will open in:</h5>
        <br/>
      <>
        <IFrame className='ticketWidget'
                src="https://fixr.co/event/813970428?compact=true&dark=false">
        </IFrame>
        <a href={TandC} target={'_blank'}>Terms and conditions</a>
      </>

      </div>
  }
};
const IndexPage = (props) => {
  return(
    <Layout location={props.location}>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Pinyon+Script&display=swap');
      </style>
      <SEO title="Tickets" />
      <>
        <IFrame className='ticketWidget'
                src="https://fixr.co/event/813970428?compact=true&dark=false">
        </IFrame>
        <a href={TandC} target={'_blank'}>Terms and conditions</a>
      </>
    </Layout>
  )
}

export default IndexPage
