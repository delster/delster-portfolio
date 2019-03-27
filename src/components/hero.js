import React from "react"
import Container from "./grid/container"

import "./hero.sass"

const Hero = props => {
  return (
    <section className="section hero">
      {(props.title || props.subtitle) && (
        <Container>
          {props.title && <h1>{props.title}</h1>}
          {props.subtitle && <p>{props.subtitle}</p>}
        </Container>
      )}
    </section>
  )
}

export default Hero
