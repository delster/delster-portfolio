import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <Link to="/">{siteTitle}</Link>
    </div>
    <div>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/blog">Blog</Link>
      <Link to="/contact">Contact</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
