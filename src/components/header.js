import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Container from "./container"

const MainHeader = styled.header`
  a {
    color: white;
  }
  > div {
    display: flex;
    flex-flow: row no-wrap;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;
  }
`
const FlexCol = styled.div`
  flex: 1 1 auto;

  & ~ & {
    text-align: right;
  }
`
const LogoLink = styled(Link)`
  ::after {
    display: none;
  }
`
const NavLink = styled(Link)`
  margin: 0.5em 1em;
`

const Header = () => (
  <MainHeader>
    <Container>
      <FlexCol>
        <LogoLink to="/">David Elster</LogoLink>
      </FlexCol>
      <FlexCol>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </FlexCol>
    </Container>
  </MainHeader>
)

export default Header