import React from 'react'

const GifGridItem = ({id, title, url}) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img
        src={url}
        alt={title} 
      ></img>
    </div>
  )
}

export default GifGridItem;