import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Container from '../grid/container'
import './header.sass'

const Header = ({ siteTitle }) => (
  <header className="header">
    <Container>
      <div className="header-left">
        <Link to="/">{siteTitle.substring(0,12)}</Link>
      </div>
      <div className="header-right">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
