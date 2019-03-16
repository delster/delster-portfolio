import React from "react"
import Layout from "../components/layout"
import Container from "../components/grid/container"
import SEO from "../utils/seo"
import Hero from "../components/hero"
import InvertedCTA from "../components/invertedcta"
import Skills from "../components/skills"
import Showcase from "../components/showcase"

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home" keywords={[`delster`, `developer`, `portfolio`]} />
      <Hero
        title="David Elster"
        subtitle="Frontend Developer & JAMstack Advocate"
      />
      <InvertedCTA bg="#0B486B">
        <h2>Hi, I'm David.</h2>
        <p>Some backstory will go here!</p>
      </InvertedCTA>
      <Skills />
      <Showcase />
    </Container>
  </Layout>
)

export default IndexPage
