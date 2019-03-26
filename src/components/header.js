import React from "react"
import { Link } from "gatsby"

import Container from './grid/container'
import './header.sass'

const Header = () => (
  <header className="header">
    <Container>
      <div className="header-left">
        <Link to="/">David Elster</Link>
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

export default Header
