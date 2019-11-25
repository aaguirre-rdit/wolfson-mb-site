import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components';
import data from '../data/committee';
import Layout from "../components/layout"
import SEO from "../components/seo";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Typography, ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from '@material-ui/core';
const AccordionCard = styled(ExpansionPanel)`
  background:transparent !important;
  .MuiExpansionPanelSummary-root{
    border-bottom:1px solid rgba(255, 255, 255, .5);
    align-items:center;
    text-align:center;
  }
  .MuiExpansionPanelSummary-content{
    text-align:center;
  }
  .MuiExpansionPanelDetails-root{
    display:flex;
    flex-direction:column;
    align-items:center;
  }
  width:250px;
  color:white !important;
`
const Mailto = styled.a`
  color:white;
  text-decoration:none;
`;
const CommitteeContainer = styled.div`
    display:flex;
    flex-wrap:wrap;
    align-items:center;
`;
const SecondPage = () => (
  <Layout>
    <SEO title="Commitee" />
    <Typography variant={'h6'}>Wolfson College 2020 May Ball Committee</Typography>
    <Typography variant={'subtitle2'}>Our teams are here to help</Typography>
    <div style={{padding:'2em 0'}}>

    <CommitteeContainer>
        {
            data.slice(1).map((item,index) => (
              <AccordionCard comId={index}>
                  <ExpansionPanelSummary>
                      <Typography variant={'body1'} align={'center'} style={{width:'100%'}}>{item.title}</Typography>
                      <ExpandMoreIcon/>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails>
                      {item.names.map(name =>(
                        <Typography variant={'body2'}>{name}</Typography>
                      ))}

                      <br/>
                      <Typography variant={'p1'}>
                          <Mailto style={{textDecoration:'none'}}href={`mailto:${item.email}`}>{item.email}</Mailto>
                      </Typography>
                  </ExpansionPanelDetails>
              </AccordionCard>
            ))
        }
    </CommitteeContainer>
    </div>
  </Layout>
)

export default SecondPage
