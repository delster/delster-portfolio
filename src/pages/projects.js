import React from "react"

import Layout from "../components/layout"
import Container from "../components/grid/container"
import SEO from "../utils/seo"

const ProjectsPage = () => (
  <Layout
    title="Recent Projects"
    gradient="linear-gradient(135deg, #00DBDE 0%, #FC00FF 100%)"
  >
    <SEO title="Projects" keywords={[`delster`, `developer`, `portfolio`]} />
    <Container>
      <h2>Expect a grid of interactive JavaScript projects here shortly.</h2>
    </Container>
  </Layout>
)

export default ProjectsPage
