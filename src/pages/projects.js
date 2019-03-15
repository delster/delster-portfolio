import React from "react"

import Layout from "../components/layout"
import SEO from "../utils/seo"
import Hero from "../components/sections/hero"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Projects" keywords={[`delster`, `developer`, `portfolio`]} />
    <Hero title="This is the Projects page." />
  </Layout>
)

export default ProjectsPage
