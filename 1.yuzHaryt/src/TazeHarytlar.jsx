import React from 'react'
import './TazeHarytlar.css'
const TazeHarytlar = (props) => {
  return (
    <div>
      <h2>{props.h2}</h2>
      <img src={props.src} alt="" srcset="" />
      <h3>{props.price}</h3>
      <p>{props.lorem}</p>
    </div>
  )
}

export default TazeHarytlar
