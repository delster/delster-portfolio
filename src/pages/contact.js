import React from "react"

import Layout from "../components/layout"
import SEO from "../utils/seo"
import Hero from "../components/sections/hero"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact | David Elster" keywords={[`delster`, `developer`, `portfolio`]} />
    <Hero title="This is the Contact page." />
  </Layout>
)

export default ContactPage
