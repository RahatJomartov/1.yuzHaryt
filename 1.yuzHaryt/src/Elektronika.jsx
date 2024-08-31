import React from 'react'
import './Elektronika.css'
const Elektronika = (props) => {
  return (
    <div>
      <h2>{props.h2}</h2>
      <img src={props.src} alt="" srcset="" />
    </div>
  )
}

export default Elektronika

