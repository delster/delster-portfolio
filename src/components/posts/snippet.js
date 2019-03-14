import React from 'react'
import { Link } from 'gatsby'

const PostSnippet = props => {
  const { path, title, date, excerpt } = props
  return (
    <div className="blog-post">
      <h3> <Link to={path}>{title}</Link> </h3>
      <p className="blog-post-date">{date}</p>
      <p className="blog-post-excerpt">{excerpt}</p>
    </div>
  )
}

export default PostSnippet