import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../utils/seo"
import Container from "../components/grid/container"
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
        <h3>Skills & Tools</h3>
        <h4 className="sm-heading">HTML Templating</h4>
        <p>
          HTML5, Pug (Jade), Haml, JSX, MDX. I think the future is something
          like MDX with some shorthand id/class/attribute tagging. Ask me about
          it.
        </p>
        <h4 className="sm-heading">CSS Preprocessors and Styling Methods</h4>
        <p>CSS3, Sass, CSS Modules, styled-components</p>
        <h4 className="sm-heading">JavaScript</h4>
        <p>JavaScript (ES6), jQuery, React</p>
        <h4 className="sm-heading">Front-end Design Frameworks</h4>
        <p>Bootstrap, Foundation, MaterializeCSS, others (ask me!)</p>
        <h4 className="sm-heading">Modern Front-end Tooling</h4>
        <p>
          Gulp, Grunt, Webpack, npm, Yarn, Terminal, CLI, Git, GitHub, Babel,
          ESLint, Prettier, Heroku, Netlify
        </p>
        <h4 className="sm-heading">...and more to come</h4>
        <p>
          I'm currently learning Serverless and Cloud Native architecture and
          related tools; GatsbyJS, GraphQL, Apollo, AWS Lambda, and more. Follow{" "}
          <Link to="/blog">my blog</Link> to track what technologies I'm playing
          with, it's always something new.
        </p>
        <h3>Front-end Web Developer</h3>
        <p>
          I started building websites out of school with just straight HTML,
          CSS, and JavaScript. From there, I started using Bootstrap for rapid
          prototyping, and eventually production sites. Eventually, I found a
          way to access an essentially endless supply of WordPress development
          gigs, which I'll talk about in <Link to="/blog">my blog</Link>, and I
          still find myself working with WordPress today. While I mostly do
          freelance consulting these days, I'm always open to short-term staff
          aug and contract opportunities.
        </p>
        <h3>JAMstack Advocacy</h3>
        <p>
          The JavaScript ecosystem is finally moving in the right direction.
          There was this endless parade of new tools that promised to be the
          last week's tool with one additional, critical feature. I think we're
          finally seeing a lot of that exploratory development aggregate into a
          standardized pool of tools. It's very clear we're pointing to a la
          carte development, and small ecoystems are appearing all over to offer
          options. I'll discuss this more in <Link to="/blog">my blog</Link>,
          too.
        </p>
        <h3>All-around Nerd</h3>
        <p>
          When I'm not writing code, I'm usually doing other nerdy stuff. I DM
          and play Dungeons & Dragons, play PC games, watch sci-fi, and talk to
          people about the future.
        </p>
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
