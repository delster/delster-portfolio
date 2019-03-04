import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/Hero"

const BlogPage = () => (
  <Layout>
    <SEO title="Blog | David Elster" keywords={[`delster`, `developer`, `portfolio`]} />
    <Hero title="This is the Blog page." />
  </Layout>
)

export default BlogPage
