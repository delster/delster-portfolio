import React from "react"

import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../utils/seo"

const AboutPage = () => (
  <Layout title="More About Me">
    <SEO title="About" keywords={[`delster`, `developer`, `portfolio`]} />
    <Container>
      <h2>Front-end Web Developer in the Greater Philadelphia Area</h2>
      <p>
        You can check out my{" "}
        <a
          href="https://github.com/delster/"
          target="_blank"
          rel="noopener noreferrer">
          GitHub
        </a>{" "}
        and{" "}
        <a
          href="https://www.linkedin.com/in/delster/"
          target="_blank"
          rel="noopener noreferrer">
          LinkedIn
        </a>
        , or{" "}
        <a
          href="/resume_davidelster.docx"
          target="_blank"
          rel="noopener noreferrer">
          download a copy of my resume
        </a>
        .
      </p>
    </Container>
  </Layout>
)

export default AboutPage
