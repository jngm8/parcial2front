import React,{ useState, useEffect} from 'react'
import "../styles/libros.css";
import LibreriaCard from "../components/LibreriaCard"
import axios from "axios";

export default function Libreria() {

    const [libros,setLibros] = useState([]);

    useEffect(() => {

        const getBooks = async () => {
            try{
                const res = await axios.get("http://localhost:8000/books/");
                setLibros(res.data);
    
            }catch(err){
    
                console.error(err);
                
            }
        }

        getBooks()

        },[])
    


  return (
    <div classname="container">
        {libros.map((libro)=>(
           <LibreriaCard
           name={libro.name}
           image={libro.image}
           isbn={libro.isbn}/>
           
        ))}
    </div>
    

  );
}