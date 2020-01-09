import React from "react"
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"
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
const IndexPage = (props) => {
  console.log({props})
  return(
    <Layout location={props.location}>
      <SEO title="Tickets" />
      <IFrame className='ticketWidget'
              src="https://fixr.co/event/813970428?compact=true&dark=false">
      </IFrame>
    </Layout>
  )
}

export default IndexPage
