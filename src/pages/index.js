import React from "react"
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../utils/seo"
import Container from "../components/grid/container"
import CTADivider from "../components/ctadivider"

const IndexPage = () => (
  <Layout
    title="David Elster"
    subtitle="Frontend Developer & JAMstack Advocate"
  >
    <SEO title="Home" keywords={[`delster`, `developer`, `portfolio`]} />
    <Container>
      <CTADivider bg="#ff9800">
        <Link to="/blog">Head this way to the blog =></Link>
      </CTADivider>
    </Container>
    <section id="about">
      <Container>
        <h2>About Me</h2>
        {/* TODO: Just. Write. This. Copy. Already. Summary or Timeline style, though? */}
        <div className="bio"></div>
      </Container>
    </section>
    <section id="projects">
      <Container>
        <h2>Some Recent Projects</h2>
      </Container>
    </section>
    <section id="blog">
      <Container>
        <h2>My Web Development Blog</h2>
      </Container>
    </section>
    <section id="contact">
      <Container>
        <h2>Contact Me</h2>
      </Container>
    </section>
  </Layout>
)

export default IndexPage
