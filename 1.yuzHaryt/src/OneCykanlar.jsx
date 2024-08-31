import React from 'react'
import './OneCykanlar.css'


const OneCykanlar = (props) => {
   
  return (
    <div>
      <img src={props.src} alt="" srcset="" />
      <h2>{props.h2}</h2>
      <h5>{props.h5}</h5>
    </div>
  )
}

export default OneCykanlar