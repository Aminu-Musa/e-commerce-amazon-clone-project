import React from 'react'

function Footer_multiple_links(props) {

  return (
    <div className='footer_multiple_links'>
        <h6 className="footer_multiple_links_header">{props.header}</h6>
        <a href="#">{props.linkName}</a>
    </div>
  )
}

export default Footer_multiple_links