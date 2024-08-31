import React from 'react'
import './Kategoriya.css'
const Kategoriya = (props) => {

  return (
    <div>
        <h5>{props.h5}</h5>
        <img src={props.src} alt="" srcset="" />
    </div>
  )
}

export default Kategoriya
