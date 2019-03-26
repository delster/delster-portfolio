import React from "react"
import PropTypes from "prop-types"

import Hero from "./hero"
import "normalize.css"
import "./layout.sass"

const Layout = props => {
  const {title, subtitle, children} = props
  return (
    <div className="page">
      <Hero
        title={title}
        subtitle={subtitle}
        layout={props.layout || "header"}
      />
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout