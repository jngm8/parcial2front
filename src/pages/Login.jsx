import React, {useState} from 'react';
import { useNavigate , Link} from 'react-router-dom';
import Button from './Button';
import LogoLibro from "../images/libros.png";
import "../styles/Button.css";
import Input from './Input';
import { FormattedMessage } from 'react-intl';





export default function Login() {


    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const API_URL = 'http://localhost:8000';
    

    const validate = () => {
        const errors = {};
        if (!user) errors.user = "El usuario es requerido";
        if (!password) errors.password = "La contraseña es requerida";
        if (password.length < 6) errors.password = "La contraseña debe tener al menos 6 caracteres";
        return errors;
    };

    const sendData = async () => {
        if (user !== "" && password !== "") {
    
          if (password.length < 6) {
            setErrors({ password: "La contraseña debe tener al menos 6 caracteres" });
            return;
          }
    
          try {
            const datosEnviados = { user, password };
            const response = await fetch(`${API_URL}/login`, {
              method: 'POST',
              body: JSON.stringify(datosEnviados),
              headers: {
                'Content-Type': 'application/json'
              }
            })

    
            if (!response.ok) {
    
              throw new Error("La red no responde");
    
            }
    
            const data = await response.json();
            sessionStorage.setItem('token', data.token);
            navigate('/libreria');
            
          } catch (error) {
            console.error("Problema con el inicio de sesión:", error);
          }
        }
      }
      const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validate();
        if (Object.keys(errors).length === 0) {
    
          console.log("Enviar datos de registro", { user, password });
          sendData();
        } else {
          setErrors(errors);
        }
      };
    
      
    let usuario = <FormattedMessage id='User'/>
    let pass =  <FormattedMessage id='Password'/>

    /* This is because the input format doesnt accept the normal format*/
    if(usuario === "User")
      usuario = "User"
    else
      usuario = "Usuario"

      if(pass === "Passwrod")
      pass = "Password"
    else
      pass = "Contraseña"
  return (
    <div>
      <div className='container'>
        <div className='container'>
          <row>
            <img src={LogoLibro} alt="Logo" className='logo_inicio_sesion' />
            <h1><FormattedMessage id="Description"/></h1>
          </row>
      </div>

      <div className='container'>
        

        <form onSubmit={handleSubmit}>

        <h3><FormattedMessage id="Libreria"/></h3>

          <Input type={'text'} id={'usuario'} text={usuario} value={user} onChange={(e) => setUser(e.target.value)} />
          {errors.user && <span>{errors.user}</span>}



          <Input type={'password'} id={'password'} text={pass} value={password} onChange={(e) => setPassword(e.target.value)} />
          {errors.user && <span>{errors.user}</span>}

          <Button name={"form__account"} id={'bt'} type="submit" text={<FormattedMessage id="Session"/>} />

          
          <div className="form__help">
            <Link to="/signup"><FormattedMessage id="Registro"/></Link>

          </div>

        </form>
     
      </div>
    </div>
    </div>
  )
}
