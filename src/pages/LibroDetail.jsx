import React, {useState, useEffect} from 'react';
import axios from "axios";


export default function LibroDetail() {

    const [libro,setLibro] = useState([]);

    useEffect( () =>{

      const getBooks = async () => {

        try{
            const res = await axios.get("http://localhost:8000/books/")
            setLibro(res.data);

        }catch(err){

            console.error(err);
            
        }
      }

      getBooks();
        
 
    },[])


  return (
    <div>

<img src={libro.img} alt="imagen" />
    {libro.name}
    {libro.isbn}
    </div>

  )
}
