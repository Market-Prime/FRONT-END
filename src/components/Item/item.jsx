import React from 'react'
import './item.css'

const item = (props) => {
  return (
    <div className="container">
    <div className='item'>
      <img src={props.image} alt="" />
      <p>{props.name}</p>
      <p>{props.price}</p>
      <img src={props.emoji} alt="" className='emoji'/>
    </div>
    
    </div>
  )
}

export default item
