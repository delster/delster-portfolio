import React from "react"
import { graphql } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../utils/seo"
import PostSnippet from "../components/post-snippet"

const Blogroll = styled.div``

export default ({ data }) => {
  return (
    <Layout title="Recent Blog Posts">
      <SEO title="Blog" keywords={[`delster`, `developer`, `portfolio`]} />
      <Container>
        <Blogroll>
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostSnippet
              key={node.id}
              path={node.frontmatter.path}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
            />
          ))}
        </Blogroll>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark( sort: { fields: [frontmatter___date], order: DESC } ) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            path
            title
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
