import React from 'react'
import './Baner4.css'
const Baner4 = (props) => {
  return (
    <div className='box'>
      <img src={props.src} alt="" srcset="" />
      <h3>{props.h3}</h3>
      <p>{props.paragraf}</p>
    </div>
  )
}

export default Baner4
