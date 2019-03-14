import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../utils/seo"
import Hero from "../components/sections/hero"

// this prop will be injected by the GraphQL query below.
export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

return (
  <Layout>
    <SEO title="Home | David Elster" keywords={[`delster`, `developer`, `portfolio`]} />
    <Hero
      title="David Elster"
      subtitle="Front-end & JavaScript Developer | JAMstack Advocate"
    />
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <h2>{frontmatter.date}</h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`