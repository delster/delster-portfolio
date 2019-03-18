import React from "react"
import Container from './grid/container'

const InvertedCTA = props => <section className="section invertedcta" style={{ color: `white`, backgroundColor: props.bg }}><Container>{props.children}</Container></section>

export default InvertedCTA