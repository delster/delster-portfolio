import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/grid/container"
import SEO from "../utils/seo"
import Hero from "../components/hero"

import "./post.sass"

// this prop will be injected by the GraphQL query below.
export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout>
      <SEO title="Home | David Elster" keywords={[`delster`, `developer`, `portfolio`]} />
      <Hero />
      <Container>
        <div className="blog-post">
          <h1 className="blog-post-title">{frontmatter.title}</h1>
          <p className="blog-post-date">{frontmatter.date}</p>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </Container>
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