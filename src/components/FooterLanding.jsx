import React from 'react'
import './assets/style/FooterLanding.scss'

const FooterLanding = (props) =>(
  <div className="container-main-footer">
    <p className="copyright-Footer"> {props.copyright}</p>
  </div>
)

export default FooterLanding