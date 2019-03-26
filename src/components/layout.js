import React from "react"
import PropTypes from "prop-types"

import Hero from "./hero"
import Header from "./header"
import "normalize.css"
import "./layout.sass"

const Layout = props => {
  const { title, subtitle, children } = props
  return (
    <div className="page">
      <Header />
      <Hero title={title} subtitle={subtitle} />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
