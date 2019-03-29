import React from "react"
import styled from "styled-components"

const StyledContainer = styled.div`
  width: 95%;
  max-width: 80ch;
  margin: 0 auto;
`

const Container = props => <StyledContainer>{props.children}</StyledContainer>

export default Container
