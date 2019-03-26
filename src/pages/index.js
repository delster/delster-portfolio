import React from "react"
import { Link } from "gatsby"
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
        <h3>JAMstack Advocacy</h3>
        <p />
        <h3>Front-end Web Developer</h3>
        <p>
          HTML5, Pug (Jade), Haml, JSX, MDX,
          CSS3, Sass, CSS Modules, styled-components,
          JavaScript (ES6 / ESNext), jQuery, React,
          Bootstrap, MaterializeCSS, other frameworks,
          Gulp, Grunt, Webpack, npm, Yarn, Terminal, CLI, Git, GitHub, Heroku, most modern tools.

          Currently learning Serverless and Cloud Native architecture and related tools; GatsbyJS, GraphQL, Apollo, AWS Lambda, and more.
        </p>
        <h3>All-around Nerd</h3>
        <p />
        {/* Potential Blog CTA Here? */}
      </Container>
    </section>
    <section id="projects">
      <Container>
        <h2>Showcase</h2>
        {/* TODO: ProjectGrid */}
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
