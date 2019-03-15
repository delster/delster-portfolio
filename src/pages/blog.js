import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/grid/container"
import SEO from "../utils/seo"
import Hero from "../components/sections/hero"
import PostSnippet from "../components/posts/snippet"

export default ({ data }) => {
  return (
    <Layout>
      <SEO title="Blog" keywords={[`delster`, `developer`, `portfolio`]} />
      <Hero title="Blog Posts" />
      <Container>
        <div className="blog-roll">
          {data.allMarkdownRemark.edges.map(({ node }) => (
            <PostSnippet
              key={node.id}
              path={node.frontmatter.path}
              title={node.frontmatter.title}
              date={node.frontmatter.date}
              excerpt={node.excerpt}
            />
          ))}
        </div>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            path
            title
            date(formatString: "DD MMMM, YYYY")
          }
          excerpt
        }
      }
    }
  }
`