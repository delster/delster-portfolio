import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../utils/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About | David Elster" keywords={[`delster`, `developer`, `portfolio`]} />
    <h1>Hi from the About page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default AboutPage
