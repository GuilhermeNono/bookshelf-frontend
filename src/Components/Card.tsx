import React from 'react'
import './Card.css'

function Card({title, imageUrl, body}) {
  return (
    <div className='card-container'>
      <div className='image-container'>
          <img src={imageUrl} alt=''></img>
      </div>
    </div>
  );
}

export default Card