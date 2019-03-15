import React from "react"

import Layout from "../components/layout"
import Container from '../components/grid/container'
import SEO from "../utils/seo"

const NotFoundPage = () => (
  <Layout>
    <Container>
      <SEO title="404: Not Found" />
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Container>
  </Layout>
)

export default NotFoundPage
