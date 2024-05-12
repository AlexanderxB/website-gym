import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import login from "../assets/images/imgCambioContraseña.jpg";
import logo from "../assets/images/logogym2.png";
import volver from "../assets/images/iconVolver.png"; // Importa la imagen "volver"
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const URI = 'http://localhost:4000/api/auth';

const validatePassword = (password) => {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  return regex.test(password);
};

const CambioContrasena = () => {

  const [Cedula, setCedula] = useState(""); // Estado para almacenar el nombre de usuario
  const [password, setContrasena] = useState(""); // Estado para almacenar la contraseña
  const [confirmarContrasena, setConfirmarContrasena] = useState(""); // Estado para almacenar la confirmacion de la contraseña
  
  const actualizarCedula = (event) => {
    setCedula(event.target.value); // Actualiza el estado del nombre de usuario cuando cambia el campo de entrada
  };

  const actualizarContrasena = (event) => {
    setContrasena(event.target.value); // Actualiza el estado de la contraseña cuando cambia el campo de entrada
  };

  const actualizarConfirmacionContrasena = (event) => {
    setConfirmarContrasena(event.target.value); // Actualiza el estado de la contraseña cuando cambia el campo de entrada
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

  const [volverStyle, setVolverStyle] = useState({
    backgroundColor: "#B42B51",
    color: "#fff",
    padding: "5px 10px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    marginTop: "-10px",
    marginLeft: "350px",
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

  const handleVolverMouseOver = () => {
    setVolverStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: "#5D3FD2",
    }));
  };

  const handleVolverMouseOut = () => {
    setVolverStyle((prevStyle) => ({
      ...prevStyle,
      backgroundColor: "#B42B51",
    }));
  };

  const handleLogin = async () => {
    try {
      // Verificar si se han llenado todos los campos
      if (!Cedula || !password || !confirmarContrasena) {
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
      
      // Realiza una solicitud PUT al backend para cambiar la contraseña
      const putResponse = await axios.put(`${URI}/${Cedula}`, {
        Cedula: Cedula,
        Contrasena: password
      });
  
      // Verifica si la solicitud PUT fue exitosa
      if (putResponse.status === 201) {
        alert("Contraseña cambiada exitosamente !!!");
      } 
    } catch (error) {
      console.error("Error al cambiar la contraseña:", error);
      // Muestra un mensaje de error en caso de problemas de conexión
      alert("Error al intentar cambiar la contraseña");
      // Muestra un mensaje de error específico si está disponible en la respuesta del servidor
      if (error.response && error.response.data && error.response.data.message) {
        alert(error.response.data.message);
      }
    }
  
    navigate("/iniciarSesion");
  };
  
  

  const handleForgotPassword = () => {
    navigate("/cambioContrasena");
  };

  const handleVolver = () => {
    // Aquí puedes agregar la lógica para volver a la página anterior
    navigate("/iniciarSesion"); // Navega a la página de inicio de sesión
  };

  return (
    <div>
      <Navbar />
      <div style={containerStyle}>
        <img src={logo} alt="Logo" className="logo-image" style={logoStyle} />
        <p style={loginTextStyle}>Cambio de Contrasena</p>

        <div style={inputContainerStyle}>
          <label htmlFor="username">Usuario:</label>
          <input
            type="text"
            id="username"
            value={Cedula} // Establece el valor del campo de entrada del nombre de usuario con el valor del estado
            onChange={actualizarCedula} // Maneja el cambio en el campo de entrada del nombre de usuario 
            style={inputStyle}
            placeholder="Ingrese su cedula"
          />
        </div>

        <div style={inputContainerStyle}>
          <label htmlFor="password">Nueva Contraseña:</label>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password} // Establece el valor del campo de entrada del nombre de usuario con el valor del estado
              onChange={actualizarContrasena} // Maneja el cambio en el campo de entrada del nombre de usuario 
              style={inputStyle}
              placeholder="Ingrese su nueva contraseña"
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
        <div style={inputContainerStyle}>
          <label htmlFor="confirmPassword">Confirme su Contraseña:</label>
          <div style={{ position: "relative", width: "100%" }}>
            <input
              type={showPassword ? "text" : "password"}
              id="confirmarContrasena"
              value={confirmarContrasena} // Establece el valor del campo de entrada del nombre de usuario con el valor del estado
              onChange={actualizarConfirmacionContrasena} // Maneja el cambio en el campo de entrada del nombre de usuario 
              style={inputStyle}
              placeholder="Confirme su nueva contraseña"
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
          Guardar Cambios
        </button>

        <button
          style={volverStyle}
          onMouseOver={handleVolverMouseOver}
          onMouseOut={handleVolverMouseOut}
          onClick={handleVolver}
        >
          Volver
        </button>
      </div>

      <img src={login} alt="Logo" style={imageStyle} />
    </div>
  );
};

export default CambioContrasena;
