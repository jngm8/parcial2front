import React, {useState} from 'react';
import { useNavigate , Link} from 'react-router-dom';
import Button from './Button';
import LogoLibro from "../images/libros.png";
import "../styles/Button.css";
import Input from './Input';




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
            const response = await fetch(`${API_URL}/auth/login`, {
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

  return (
    <div>
    <div className='container'>

      <img src={LogoLibro} alt="Logo" className='logo_inicio_sesion' />
      <h5 className='texto_inicio_sesion'>Tu libreria aliada </h5>
      <form onSubmit={handleSubmit}>

        <Input type={'text'} id={'usuario'} text={'usuario'} value={user} onChange={(e) => setUser(e.target.value)} />
        {errors.user && <span>{errors.user}</span>}

        <Input type={'password'} id={'password'} text={'password'} value={password} onChange={(e) => setPassword(e.target.value)} />
        {errors.user && <span>{errors.user}</span>}

        <Button name={"form__account"} id={'bt'} type="submit" text={'Iniciar sesión'} />

        
        <div className="form__help">
          <Link to="/signup">No te has registrado? Hazlo</Link>

        </div>

      </form>
     
    </div>
    </div>
  )
}
