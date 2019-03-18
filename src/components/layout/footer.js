import React from "react"
import Container from "../grid/container"
import "./footer.sass"

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-left">
          © {new Date().getFullYear()}
          <a href="https://www.linkedin.com/in/delster/"> David Elster</a>
        </div>
        <div className="footer-right">
          <a href="https://github.com/delster/delster-portfolio">{"</>"}</a>
        </div>
      </Container>
    </footer>
  )
}

export default Footer
