import React from "react"
import { Link } from "gatsby"

import Container from './grid/container'
import './header.sass'

const Header = () => (
  <header className="header">
    <Container>
      <div className="header-left">
        <Link className="header-home-link" to="/">David Elster</Link>
      </div>
      <div className="header-right">
        <Link className="nav-link" to="/about">About</Link>
        <Link className="nav-link" to="/projects">Projects</Link>
        <Link className="nav-link" to="/blog">Blog</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
      </div>
    </Container>
  </header>
)

export default Header
