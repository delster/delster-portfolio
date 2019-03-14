import React from "react"

import Layout from "../components/layout"
import Container from '../components/grid/container'
import SEO from "../utils/seo"
import Hero from "../components/sections/hero"

const ProjectsPage = () => (
  <Layout>
    <Container>
      <SEO title="Projects | David Elster" keywords={[`delster`, `developer`, `portfolio`]} />
      <Hero title="This is the Projects page." />
    </Container>
  </Layout>
)

export default ProjectsPage
