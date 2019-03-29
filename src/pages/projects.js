import React from "react"

import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../utils/seo"

const ProjectsPage = () => (
  <Layout title="Recent Projects">
    <SEO title="Projects" keywords={[`delster`, `developer`, `portfolio`]} />
    <Container>
      <h2>Expect a grid of interactive JavaScript projects here shortly.</h2>
    </Container>
  </Layout>
)

export default ProjectsPage
