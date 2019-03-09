import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/Hero"
import InvertedCTA from "../components/sections/InvertedCTA"
import Skills from "../components/sections/Skills.js"
import Projects from "../components/sections/Projects"

const IndexPage = () => (
  <Layout>
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
  </Layout>
)

export default IndexPage
