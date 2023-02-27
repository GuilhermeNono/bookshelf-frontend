import React from 'react'
import './Card.css'

function Card({title, imageUrl, body}) {
  return (
    <div className='card-container'>
      <div className='image-container'>
          <img src={imageUrl} alt=''></img>
      </div>

      <div className="card-content">
          <div className='card-title'>
            {title}
          </div>
          <div className="card-body">
            <p>{body}</p>
          </div>
      </div>

      <div className="btn">
        <button>
          <a>Saiba Mais</a>
        </button>
      </div>

    </div>
  );
}

export default Card