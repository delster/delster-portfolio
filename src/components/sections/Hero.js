import React from "react"
import Container from '../grid/container'

const Hero = props => <header className="section hero"><Container><h1>{props.title}</h1><p>{props.subtitle}</p></Container></header>

export default Hero