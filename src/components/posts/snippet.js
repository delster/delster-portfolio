import React from 'react'
import { Link } from 'gatsby'

import './snippet.sass'

const PostSnippet = props => {
  const { path, title, date, excerpt } = props
  return (
    <div className="blog-post-snippet">
      <h3> <Link to={path}>{title}</Link> </h3>
      <p className="blog-post-date">{date}</p>
      <p className="blog-post-excerpt">{excerpt}</p>
    </div>
  )
}

export default PostSnippet