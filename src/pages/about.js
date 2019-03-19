import React from "react"

import Layout from "../components/layout"
import Container from "../components/grid/container"
import SEO from "../utils/seo"

const AboutPage = () => (
  <Layout title="More About Me">
    <SEO title="About" keywords={[`delster`, `developer`, `portfolio`]} />
    <Container>
      <h2>Hello, this is the about page.</h2>
      <p>Welcome to the page that will eventually house a bio and history and personal stuff.</p>
    </Container>
  </Layout>
)

export default AboutPage