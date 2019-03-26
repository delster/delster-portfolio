import React from 'react'
import './ctadivider.sass'

const CTADivider = props => <div className="cta-divider" style={{background:props.bg}}>{props.children}</div>

export default CTADivider