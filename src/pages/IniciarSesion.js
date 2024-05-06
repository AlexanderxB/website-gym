import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import login from "../assets/images/imglogin.webp";
import logo from "../assets/images/logogym2.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import UserContext from "../UserContext";
import axios from "axios";

//useState --> devuelve un valor con estado y una funcion para actualizarla
// esta funcion useState([]) devuelve dos cosas: 1-un valor con estado que es usuarios 2-una funcion para actualizar que es setUsuarios

const URI = 'http://localhost:4000/api/auth';

const IniciarSesion = () => {

  const { setCedulaUsuario } = useContext(UserContext);
  
  const [Cedula, setCedula] = useState(""); // Estado para almacenar el nombre de usuario
  const [password, setContrasena] = useState(""); // Estado para almacenar la contraseña

  const actualizarCedula = (event) => {
    setCedula(event.target.value); // Actualiza el estado del nombre de usuario cuando cambia el campo de entrada
  };

  const actualizarContrasena = (event) => {
    setContrasena(event.target.value); // Actualiza el estado de la contraseña cuando cambia el campo de entrada
  };

  const navigate = useNavigate();

  const imageStyle = {
    width: "1900px",
    height: "850px",
    marginTop: "80px",
  };

  const [style, setStyle] = useState({
    backgroundColor: "#B42B51",
    color: "#fff",
    padding: "10px 30px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  });

  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "450px",
    height: "600px",
    position: "absolute",
    top: "180px",
    left: "100px",
    padding: "20px",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const logoStyle = {
    width: "100%",
    marginBottom: "20px",
  };

  const loginTextStyle = {
    fontSize: "24px",
    marginBottom: "20px",
  };

  const inputContainerStyle = {
    width: "100%",
    marginBottom: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
  };

  const inputStyle = {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    marginBottom: "5px",
  };

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleMouseOver = () => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: "#5D3FD2",
    }));
  };

  const handleMouseOut = () => {
    setStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: "#B42B51",
    }));
  };

  const handleForgotPassword = () => {
    navigate("/cambioContrasena");
  };

  const handleLogin = async () => {
    try {
      // Realiza una solicitud GET al backend para consultar si el usuario está registrado
      const response = await axios.get(`${URI}/${Cedula}`);
      
      // Imprime la respuesta completa en la consola para verificar su estructura y contenido
      console.log(response);
  
      // Verifica la respuesta del backend
      if (response.data && response.data.body && response.data.body.length > 0) {
        // Accede a la contraseña en la respuesta del backend
        const { Contrasena } = response.data.body[0];
  
        // Ahora puedes utilizar la contraseña para realizar las comprobaciones necesarias
        if (Contrasena === password) {
          // Si la contraseña coincide, redirige a la página de consejos
          setCedulaUsuario(Cedula); // Establece la cédula del usuario en el contexto
          navigate("/Consejos");
        } else {
          // Si la contraseña no coincide, muestra un mensaje de error
          alert("Contraseña incorrecta. Verifica los datos ingresados.");
        }
      } else {
        // Si la cédula no está registrada en la base de datos o la respuesta no tiene datos
        alert("Usuario no registrado");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      // Muestra un mensaje de error en caso de problemas de conexión
      alert("Error al intentar iniciar sesión");
      // Muestra un mensaje de error específico si está disponible en la respuesta del servidor
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      }
    }
  };
  
  
  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <img src={logo} alt="Logo" className="logo-image" style={logoStyle} />
        <p style={loginTextStyle}>Inicio Sesión</p>

        <div style={inputContainerStyle}>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={Cedula} 
            onChange={actualizarCedula} 
            style={inputStyle}
            placeholder="Ingrese su cedula"
          />
        </div>

        <div style={inputContainerStyle}>
          <label htmlFor="password">Contraseña:</label>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password} 
              onChange={actualizarContrasena} 
              style={inputStyle}
              placeholder="Ingrese su contraseña"
            />
            <div style={{ marginBottom: "10px", textAlign: "center" }}>
             <p style={{ fontSize: "14px", cursor: "pointer" }} onClick={handleForgotPassword}>¿Olvidó su contraseña?</p>
            </div>
            <button
              style={{
                position: "absolute",
                right: "10px",
                top: "30%",
                transform: "translateY(-50%)",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
              onClick={toggleShowPassword}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>

        <button
          style={style}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleLogin}
        >
          Ingresar
        </button>
      </div>

      <img src={login} alt="Logo" style={imageStyle} />
    </div>
  );
};

export default IniciarSesion;
