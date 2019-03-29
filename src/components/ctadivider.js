import React from "react"
import styled from "styled-components"

const StyledCTADivider = styled.div`
  background: ${props => props.bg};
  margin-top: -4.75rem;
  padding: 2rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 16px 0 rgba(0, 0, 0, 0.09);
  a {
    color: white;
  }
`

const CTADivider = props => <StyledCTADivider bg={props.bg}>{props.children}</StyledCTADivider>

export default CTADivider
