import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import GifGridItem from './GifGridItem';

const GifGrid = ({ categoria }) => {
  // const apiKey = 'RuLBOmXSEY5rCfTT2sEEWcHSaIC737EN';

  const {data: images, loading} = useFetchGifs(categoria);
  
  return (
    <>
      <h3 className="animate__animated animate__bounce">{categoria}</h3>

      { loading && <p className="animate__animated animate__flash">Cargando...</p> }

      <div className="card-grid">
        {images.map(img => (          
          <GifGridItem 
            key={img.id} 
            {...img}
            />
        ))}

      </div>
    </>
  );
}

export default GifGrid;