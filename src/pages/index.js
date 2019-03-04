import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Hero from "../components/sections/Hero"

const IndexPage = () => (
  <Layout>
    <SEO title="Home | David Elster" keywords={[`delster`, `developer`, `portfolio`]} />
    <Hero title="Hi people" />
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/about">Go to page 2</Link>
  </Layout>
)

export default IndexPage
