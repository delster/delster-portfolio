import React from "react"
import PropTypes from "prop-types"

import Hero from "./hero"
import Footer from "./layout/footer"
import "normalize.css"
import "./layout.sass"

const Layout = props => {
  const {title, subtitle, gradient, children} = props
  let g = (gradient) ? gradient : `linear-gradient(135deg, hsla(207,73%,31%,1) 0%,hsla(207,73%,31%,1) 20%,hsla(171,87%,66%,1) 100%)`

  return (
    <div className="page">
      <Hero
        title={title}
        subtitle={subtitle}
        layout={props.layout || "header"}
        gradient={g} />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout