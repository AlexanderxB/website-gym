import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import login from "../assets/images/imglogin.webp";
import logo from "../assets/images/logogym2.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const IniciarSesion = () => {
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

  const handleLogin = () => {
    // Aquí puedes realizar cualquier lógica de autenticación necesaria
    
    // Después de autenticar al usuario, navega a la página PerfilUsuario.js
    navigate("/consejos");
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
            style={inputStyle}
            placeholder="Ingrese su usuario"
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
