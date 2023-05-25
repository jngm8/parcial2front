import React from 'react';
import "../styles/libros.css";

export default function LibreriaCard({name,image,isbn}) {
  return (
    <div className="card">
      
      <img src={image} alt="carta libro" className="imagen" />

      <h1 className="name">{name}</h1>

      <p className="isbn">{isbn}</p>

    </div>
  )
}

