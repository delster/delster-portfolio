import React from "react"
import PropTypes from "prop-types"
import styled, { createGlobalStyle, keyframes } from "styled-components"

import Hero from "./hero"
import Header from "./header"
import "normalize.css"

const bodyBackgroundKeyframes = keyframes`
  0% { background-position: 100% 0% }
  50% { background-position: 0% 100% }
  100% { background-position: 100% 0% }
`

const GlobalStyle = createGlobalStyle`
  ::selection {
    color: black;
    background-color: #52acff;
  }
  h1, .h1,
  h2, .h2,
  h3, .h3,
  h4, .h4,
  h5, .h5,
  h6, .h6 {
    margin-bottom: .5em;
  }
  body {
    letter-spacing: .25px;
    line-height: 1.6;
    background: linear-gradient(45deg, #52acff, #5df4dd, #e3a200, #f76b1c, #b721ff);
    background-size: 500%;
    background-attachment: fixed;
    animation: ${bodyBackgroundKeyframes} 25s ease-in-out infinite;
  a {
    display: inline;
    position: relative;
    font-weight:  600;
    text-decoration: none;
    padding: 0 4px;
    transition: .1s color ease-in-out .1s;
    z-index: 10;
    ::after {
      background-color: #52acff;
      display: inline;
      content: ' ';
      position: absolute;
      left: 0;
      bottom: 0;
      height: 3px;
      width: 100%;
      transition: .2s height ease-in-out;
      z-index: -1;
    }
    :hover {
      color: white;
      ::after {
        height: 100%;
      }
    }
`
const DefaultLayout = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  min-height: 100vh;

  main {
    flex: 1 1 100%;
    background-color: #f3f6f9;
    padding-top: 2rem;
  }
  section,
  .section {
    padding: 2rem 0;
  }
`

const Layout = props => {
  const { title, subtitle, children } = props
  return (
    <DefaultLayout>
      <GlobalStyle />
      <Header />
      <Hero title={title} subtitle={subtitle} />
      <main>{children}</main>
    </DefaultLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
