import React, { useState } from "react";
import { Link } from "react-router-dom"; // Importa el componente Link
import Navbar from "../components/Navbar";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import registro from "../assets/images/imgregistro.jpg";
import logo from "../assets/images/logogym2.png";

const Registro = () => {
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

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((prevState) => !prevState);
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

  const handleRegistration = () => {
    // Aquí puedes agregar lógica adicional antes de redirigir, si es necesario
    // ...

    // Redirige al usuario a iniciarSesion.js
    window.location.href = "/iniciarSesion";
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
            style={inputStyle}
            placeholder="Ingrese su nombre completo"
          />
        </div>

        <div style={inputContainerStyle}>
          <label htmlFor="username">Documento:</label>
          <input
            type="text"
            id="username"
            style={inputStyle}
            placeholder="Ingrese su documento completo"
          />
        </div>

        <div style={inputContainerStyle}>
          <label htmlFor="username">Celular:</label>
          <input
            type="text"
            id="username"
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
              id="confirmPassword"
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
        {/* Fin de la nueva sección */}

        <button
          style={style}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={handleRegistration} // Llama a la función al hacer clic
        >
          Registrarse
        </button>
      </div>

      <img src={registro} alt="Logo" style={imageStyle} />
    </div>
  );
};

export default Registro;
