import React from 'react';
import "../styles/libros.css";

export default function LibreriaCard({name,image,isbn, handleClick}) {



  return (

    
    <div className="card" onClick={handleClick}>
      
      <img src={image} alt="carta libro" className="imagen" />

      <h5 className="name">{name}</h5>

      <p className="isbn">{isbn}</p>

    </div>
  )
}

