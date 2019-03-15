import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/grid/container"
import SEO from "../utils/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" keywords={[`delster`, `developer`, `portfolio`]} />
    <Container>
      <h1>Hi from the About page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </Container>
  </Layout>
)

export default AboutPage
