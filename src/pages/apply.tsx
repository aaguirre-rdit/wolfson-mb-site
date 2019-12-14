import React, {useEffect} from "react"
import { Link, navigate } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
const IndexPage = (props) => {
  return(
    <Layout location={props.location}>
      <SEO title="Apply for work" />
      <h3>
        Application form here
      </h3>
    </Layout>
  )
}

export default IndexPage
