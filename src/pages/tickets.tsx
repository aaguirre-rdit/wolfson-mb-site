import React from "react"
import styled from 'styled-components';
import Layout from "../components/layout"
import SEO from "../components/seo"
const IFrame = styled.iframe`
  width:80%;
  min-height:400px;
  border:1px solid rgba(255,255,255,0.5);
   @media (max-width: 500px) {
    width: 100vw;
    height:100vh;
  }
`
const IndexPage = (props) => {
  console.log({props})
  return(
    <Layout location={props.location}>
      <SEO title="Tickets" />
      <IFrame src="https://fixr.co/event/813970428?compact=true&dark=true">
      </IFrame>
    </Layout>
  )
}

export default IndexPage
