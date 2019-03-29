import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../utils/seo"
import Container from "../components/container"
import CTADivider from "../components/ctadivider"

const IndexPage = () => (
  <Layout
    title="David Elster"
    subtitle="Frontend Developer & JAMstack Advocate">
    <SEO title="Home" keywords={[`delster`, `developer`, `portfolio`]} />
    <Container>
      <CTADivider bg="#ff9800">
        <Link to="/blog">Head this way to the blog =></Link>
      </CTADivider>
    </Container>
    <section id="about">
      <Container>
        <h2>Short Version</h2>
        <p>One-liner about what I do. Maybe a grid of services. Hourly rate.</p>
      </Container>
    </section>
    <section id="projects">
      <Container>
        <h2>Showcase</h2>
        <p>Grid of recent projects. Disclaimer a lot of the work I've done is white label or under NDA.</p>
      </Container>
    </section>
    <section id="blog">
      <Container>
        <h2>I also write about stuff!</h2>
        <p>
          I blog on this site and expect to cover news, write tutorials, and
          just be a resource for others in the front-end space. Click{" "}
          <Link to="/blog">here</Link> to see what I'm up to.
        </p>
      </Container>
    </section>
    <section id="contact">
      <Container>
        <h2>Contact Me</h2>
        <p>
          The quickest way to get a response is to reach out by email:{" "}
          <a href="mailto:davidandtheweb@gmail.com">davidandtheweb@gmail.com</a>
          .
        </p>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
