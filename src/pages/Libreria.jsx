import React,{ useState, useEffect} from 'react'
import "../styles/libros.css";
import LibreriaCard from "../components/LibreriaCard"
import axios from "axios";
import { FormattedMessage } from 'react-intl';


export default function Libreria() {

    const [libros,setLibros] = useState([]);
    const [selected, setSelected] = useState(null)


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
    
        const handleClick = async (id) => {
            const res = await axios.get("http://localhost:8000/books/" + id)
            setSelected(res.data)
            console.log(selected?.available_online)
        }
        let available = selected?.available_online
        if(available=== true)
            
            available= "Yes"
        else
            available= "No"

  return (

    <div className="main_container">

        <div className="container">
            {libros.map((libro)=>(
            <LibreriaCard
            name={libro.name}
            image={libro.image}
            isbn={libro.isbn}
            handleClick={() => handleClick(libro.id)}/>
            ))}
        </div>
        <div className="card-detail">
            <div className="title-column">
                <row className="row">
                    <FormattedMessage id="Title"/>
                </row>
                <row className="row">
                    <FormattedMessage id="ISBN"/>
                </row>
                <row className="row">
                    <FormattedMessage id="Author"/>
                </row>
                <row className="row">
                    <FormattedMessage id="Publisher"/>
                </row>
                <row className="row">
                    <FormattedMessage id="Gender"/>
                </row>
                <row className="row">
                    <FormattedMessage id="Year"/>
                </row>
                <row className="row">
                    <FormattedMessage id="Price"/>
                </row>
                <row className="row">
                    <FormattedMessage id="Available Online"/>
                </row>
                <row className="row">
                    <FormattedMessage id="Summary"/>
                </row>
            </div>
            <div className="value-column">
                <h5>{selected?.name}</h5>
                <row className="rowd">{selected?.isbn}</row>
                <row className="rowd">{selected?.author}</row>
                <row className="rowd">{selected?.publisher}</row>
                <row className="rowd">{selected?.gender}</row>
                <row className="rowd">{selected?.year}</row>
                <row className="rowd">{selected?.price}</row>
                <row className="rowd">{available}</row>
                <row className="rowd">{selected?.summary}</row>

            </div>
        </div>
    </div>


  );
}