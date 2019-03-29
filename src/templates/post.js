import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../utils/seo"

const BlogPost = styled.div`
  margin-top: -4.5rem;
`
const BlogPostContent = styled.div`
  background-color: #fff;
  margin-bottom: 2rem;
  padding: 2rem;
  border-radius: 2rem;
  box-shadow: 0 4px 16px 0 rgba(0,0,0,.04);
  .wide {
    margin-left: -2rem;
    margin-right: -2rem;
  }
`

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark

  return (
    <Layout title={frontmatter.title} subtitle={frontmatter.date}>
      <SEO
        title={frontmatter.title}
        keywords={[`delster`, `developer`, `portfolio`]}
      />
      <Container>
        <BlogPost>
          <BlogPostContent dangerouslySetInnerHTML={{ __html: html }} />
        </BlogPost>
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
