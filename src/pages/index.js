import React from "react"
import Layout from "../components/layout"
import Container from '../components/grid/container'
import SEO from "../utils/seo"
import Hero from "../components/sections/hero"
import InvertedCTA from "../components/sections/invertedcta"
import Skills from "../components/sections/skills"
import Projects from "../components/sections/projects"

const IndexPage = () => (
  <Layout>
    <Container>
      <SEO title="Home | David Elster" keywords={[`delster`, `developer`, `portfolio`]} />
      <Hero
        title="David Elster"
        subtitle="Front-end & JavaScript Developer | JAMstack Advocate"
      />
      <InvertedCTA bg='#0B486B'>
        <h2>Hi, I'm David.</h2>
        <p>Some backstory will go here!</p>
      </InvertedCTA>
      <Skills />
      <Projects />
    </Container>
  </Layout>
)

export default IndexPage
