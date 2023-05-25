import React, {useState, useEffect} from 'react';
import axios from "axios";


export default function LibroDetail() {

    const [libro,setLibro] = useState([]);

    const [showCard, setShowCard] = useState(false);

    const handleClick = () => {
      setShowCard(true);
    };


    useEffect(async () =>{

        try{
            const res = await axios.get("http://localhost:8000/books/")
            setLibro(res.data);

        }catch(err){

            console.error(err);
            
        }

    },[])


  return (
    <div>

<img src={libro.img} alt="imagen" />
    {libro.name}
    {libro.isbn}
    <button onClick={handleClick}></button>
    {showCard && (
        <div>
          <h2>{libro.name}</h2>
          <p>{libro.isbn}</p>
        </div>
      )}
    </div>

  )
}
