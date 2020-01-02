import React from "react"
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"
const IFrame = styled.iframe`
  width:80% !important;
  min-height:400px !important;
  border:1px solid rgba(255,255,255,0.5);
   @media (max-width: 500px) {
    width: 100vw !important;
    height:100vh !important;
  }
`
const IndexPage = (props) => {
  console.log({props})
  return(
    <Layout location={props.location}>
      <SEO title="Tickets" />
      <IFrame className='ticketWidget'
              src="https://fixr.co/event/813970428?compact=false&dark=false">
      </IFrame>
    </Layout>
  )
}

export default IndexPage
