import React from 'react'
import './Footer.css'
const Footer = (props) => {
  return (
    <div>
      <img src={props.src} alt="" srcset="" />
      <h4>{props.h4}</h4>
      <a href="">{props.ab}</a>
    </div>
  )
}

export default Footer