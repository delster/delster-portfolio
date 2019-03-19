import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Container from "../components/grid/container"
import SEO from "../utils/seo"
import PostSnippet from "../components/posts/snippet"

export default ({ data }) => {
  return (
    <Layout title="Recent Blog Posts">
      <SEO title="Blog" keywords={[`delster`, `developer`, `portfolio`]} />
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
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`