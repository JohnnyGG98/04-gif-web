import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifApp = () => {

  // const categorias = ['One Punch', 'Samurai X', 'Naruto'];

  const [categorias, setCategoria] = useState([
    'One Punch'
  ]);

  // const handleAdd = () => {
  //   const newValue = 'Hunter X Hunter';
  //   // setCategoria([...categorias, newValue]);
  //   setCategoria(cats => [...cats, newValue]);
  // }

  return (
    <>
      <h2>Gif Expert App</h2>

      <AddCategory setCategoria={setCategoria}/>

      <hr/>

      <ol>
        { categorias.map( c => {
          return <GifGrid 
            key={c} 
            categoria={c} />
        }) }
      </ol>

    </>
  );
}

export default GifApp;