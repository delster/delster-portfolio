import React from "react"
import Layout from "../components/layout"
import SEO from "../utils/seo"
import Container from "../components/grid/container"

const ThanksPage = () => (
  <Layout title="Thanks for Reaching Out!">
    <SEO title="Thanks for Reaching Out!" keywords={[`delster`, `developer`, `portfolio`]} />
    <Container>
      <h2>I'll be sure to contact you ASAP, thanks.</h2>
    </Container>
  </Layout>
)

export default ThanksPage