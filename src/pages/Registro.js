import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import registro from "../assets/images/imgregistro.jpg";
import logo from "../assets/images/logogym2.png";
import axios from "axios";

const URI = 'http://localhost:4000/api/usuarios';

const validatePassword = (password) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
};

const Registro = () => {

  const [Nombre_Completo, setNombreCompleto] = useState(""); 
  const [Cedula, setCedula] = useState(""); 
  const [Celular, setCelular] = useState(""); 
  const [password, setContrasena] = useState(""); 
  const [confirmarContrasena, setConfirmarContrasena] = useState(""); 
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  
  const actualizarNombreCompleto = (event) => {
    setNombreCompleto(event.target.value); // Actualiza el estado del nombre de usuario cuando cambia el campo de entrada
  };
  
  const actualizarCedula = (event) => {
    setCedula(event.target.value); // Actualiza el estado del nombre de usuario cuando cambia el campo de entrada
  };

  const actualizarCelular = (event) => {
    setCelular(event.target.value); // Actualiza el estado del nombre de usuario cuando cambia el campo de entrada
  };

  const actualizarContrasena = (event) => {
    setContrasena(event.target.value); // Actualiza el estado de la contraseña cuando cambia el campo de entrada
  };

  const actualizarConfirmacionContrasena = (event) => {
    setConfirmarContrasena(event.target.value); // Actualiza el estado de la contraseña cuando cambia el campo de entrada
  };

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

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
    height: "680px",
    position: "absolute",
    top: "160px",
    left: "250px",
    padding: "20px",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const logoStyle = {
    width: "80%",
    marginBottom: "0px",
  };

  const registerTextStyle = {
    fontSize: "24px",
    marginBottom: "0px",
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
    marginBottom: "0px",
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

  const handleRegistration = async () => {
    try {
      // Verificar si se han llenado todos los campos
      if (!Nombre_Completo || !Cedula || !Celular || !password || !confirmarContrasena) {
        alert("Por favor, complete todos los campos");
        return;
      }

      // Verificar si las contraseñas coinciden
      if (password !== confirmarContrasena) {
        // Mostrar un mensaje de error
        alert("Las contraseñas no coinciden");
        return; // No continúes con el registro si las contraseñas no coinciden
      }

      // Validar la contraseña
      if (!validatePassword(password)) {
        alert("La contraseña debe tener al menos 8 caracteres, una letra mayúscula, una letra minúscula y un número");
        return;
      }

      // Envía los datos del registro al backend de la tabla usuarios
      const response = await axios.post(URI, {
        Cedula: Cedula, 
        Nombre_Completo: Nombre_Completo, 
        Celular: Celular, 
        Contrasena: password 
      });

      console.log(response.data);
      //navigate("/iniciarSesion");
      window.location.href = "/iniciarSesion";
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <img src={logo} alt="Logo" className="logo-image" style={logoStyle} />
        <p style={registerTextStyle}>Registro</p>

        <div style={inputContainerStyle}>
          <label htmlFor="username">Nombre Completo:</label>
          <input
            type="text"
            id="username"
            value={Nombre_Completo} 
            onChange={actualizarNombreCompleto}  
            style={inputStyle}
            placeholder="Ingrese su nombre completo"
          />
        </div>

        <div style={inputContainerStyle}>
          <label htmlFor="username">Documento:</label>
          <input
            type="text"
            id="username"
            value={Cedula} 
            onChange={actualizarCedula} 
            style={inputStyle}
            placeholder="Ingrese su documento completo"
          />
        </div>

        <div style={inputContainerStyle}>
          <label htmlFor="username">Celular:</label>
          <input
            type="text"
            id="username"
            value={Celular} 
            onChange={actualizarCelular} 
            style={inputStyle}
            placeholder="Ingrese su numero de celular completo"
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
            <button
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
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

        {/* Nueva sección para confirmar contraseña */}
        <div style={inputContainerStyle}>
          <label htmlFor="confirmPassword">Confirme su Contraseña:</label>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmarContrasena"
              value={confirmarContrasena} 
              onChange={actualizarConfirmacionContrasena} 
              style={inputStyle}
              placeholder="Confirme su contraseña"
            />
            <button
              style={{
                position: "absolute",
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                border: "none",
                background: "none",
                cursor: "pointer",
              }}
              onClick={toggleShowConfirmPassword}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
        </div>
        
        <button
          style={style}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleRegistration} 
        >
          Registrarse
        </button>
      </div>

      <img src={registro} alt="Logo" style={imageStyle} />
    </div>
  );
};

export default Registro;
