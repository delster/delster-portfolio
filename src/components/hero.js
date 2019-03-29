import React from "react"
import styled from "styled-components"
import Container from "./container"

const StyledHero = styled.section`
  & > div {
    padding: 1rem 0 0
  }
`
const HeroTitle = styled.h1`
  margin: 0
`
const HeroSubtitle = styled.p``

const Hero = props => {
  return (
    <StyledHero>
      {(props.title || props.subtitle) && (
        <Container>
          {props.title && <HeroTitle>{props.title}</HeroTitle>}
          {props.subtitle && <HeroSubtitle>{props.subtitle}</HeroSubtitle>}
        </Container>
      )}
    </StyledHero>
  )
}

export default Hero
