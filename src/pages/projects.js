import React from "react"

import Layout from "../components/layout"
import SEO from "../utils/seo"
import Hero from "../components/hero"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" keywords={[`delster`, `developer`, `portfolio`]} />
    <Hero title="Recent Projects" />
  </Layout>
)

export default ProjectsPage
