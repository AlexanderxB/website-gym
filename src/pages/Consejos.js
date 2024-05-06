//Consejos.js
import React, { useContext } from "react";
import Navbar2 from "../components/Navbar2";
import imgaacerca from "../assets/images/imgperfil.jpeg";
import imgestiramiento1 from "../assets/images/imgestiramiento.png";
import imgdescanso from "../assets/images/imgdescanso.png";
import imgvervideo from "../assets/images/imgvervideo.png";
import UserContext from "../UserContext";

function Motivacion() {
  // Dentro del componente 
  const { cedulaUsuario } = useContext(UserContext);

  const backgroundImageStyle = {
    width: "1980px",
    height: "850px",
    marginTop: "80px",
    position: "relative",
  };

  const containerStyle = {
    position: "absolute",
    top: "180px",
    left: "850px",
    padding: "20px",
    borderRadius: "15px",
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: "600px",
    height: "150px",
    zIndex: 2, // Capa superior
  };

  const container2Style = {
    ...containerStyle,
    top: "380px",
    zIndex: 3, // Capa superior
  };

  const container3Style = {
    ...containerStyle,
    top: "580px",
    zIndex: 4, // Capa superior
  };

  const volverStyle = {
    position: "absolute",
    bottom: "10px",
    right: "0px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const contentStyle = {
    display: "flex",
    alignItems: "center",
  };

  const imageContainerStyle = {
    width: "90px",
    height: "100px",
    marginRight: "10px",
  };

  const imageStyleInsideContainer = {
    width: "100%",
    height: "100%",
    borderRadius: "50%",
  };

  return (
    <div>
      <Navbar2 cedulaUsuario={cedulaUsuario} />
      <div style={{ display: "flex", position: "relative" }}>
        <img src={imgaacerca} alt="Logo" className="logo-image" style={backgroundImageStyle} />
        
        {/* Primer contenedor */}
        <div style={containerStyle}>
          <div style={contentStyle}>
            <div style={imageContainerStyle}>
              <img
                src={imgestiramiento1}
                alt="Logo"
                className="logo-image"
                style={imageStyleInsideContainer}
              />
            </div>
            <h2>Recuerda estirar al empezar y terminar tu rutina</h2>
          </div>
          <div style={volverStyle}></div>
        </div>

        {/* Segundo contenedor */}
        <div style={container2Style}>
          <div style={contentStyle}>
            <div style={imageContainerStyle}>
              <img
                src={imgdescanso}
                alt="Logo"
                className="logo-image"
                style={imageStyleInsideContainer}
              />
            </div>
            <h2>Descansa de 1 a 2 minutos después de cada ejercicio</h2>
          </div>
          <div style={volverStyle}></div>
        </div>

        {/* Tercer contenedor */}
        <div style={container3Style}>
          <div style={contentStyle}>
            <div style={imageContainerStyle}>
              <img
                src={imgvervideo}
                alt="Logo"
                className="logo-image"
                style={imageStyleInsideContainer}
              />
            </div>
            <h2>Observa bien la técnica de tus ejercicios favoritos con nuestros videos</h2>
          </div>
          <div style={volverStyle}></div>
        </div>
      </div>
    </div>
  );
}

export default Motivacion;
