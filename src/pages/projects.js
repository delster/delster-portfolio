import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/Hero"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects | David Elster" keywords={[`delster`, `developer`, `portfolio`]} />
    <Hero title="This is the Projects page." />
  </Layout>
)

export default ProjectsPage
