import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const BlogPostSnippet = styled.div`
  background-color: white;
  margin: 1rem 0;
  padding: 2rem 2rem 1rem;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.04);
  border-radius: 1.5rem;
`
const BlogPostTitle = styled.h3`
  margin-bottom: 0;
`
const BlogPostDate = styled.div`
  opacity: 0.6;
  font-size: 0.875rem;
  font-weight: 700;
  text-transform: uppercase;
  margin-bottom: 0;
  padding-bottom: 0.25em;
`
const BlogPostExcerpt = styled.p``

const PostSnippet = props => {
  const { path, title, date, excerpt } = props
  return (
    <BlogPostSnippet>
      <BlogPostTitle>
        <Link to={path}>{title}</Link>
      </BlogPostTitle>
      <BlogPostDate>{date}</BlogPostDate>
      <BlogPostExcerpt>{excerpt}</BlogPostExcerpt>
    </BlogPostSnippet>
  )
}

export default PostSnippet
