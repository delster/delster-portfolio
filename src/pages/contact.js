import React from "react"

import Layout from "../components/layout"
import SEO from "../utils/seo"
import ContactForm from "../components/contactform"

const ContactPage = () => (
  <Layout title="Reach Out!">
    <SEO title="Contact" keywords={[`delster`, `developer`, `portfolio`]} />
    <ContactForm />
  </Layout>
)

export default ContactPage
