// src/pages/AcercaNosotros.js
import React from "react";
import Navbar2 from "../components/Navbar2";
import imgaacerca from "../assets/images/imgperfil.jpeg";
import imgestiramiento1 from "../assets/images/imgestiramiento.png";
import imgdescanso from "../assets/images/imgdescanso.png";
import imgvervideo from "../assets/images/imgvervideo.png";

function Motivacion() {
  const backgroundImageStyle = {
    width: "1980px",
    height: "850px",
    marginTop: "80px"
  };

  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: "600px",
    height: "150px",
    position: "absolute",
    top: "180px",
    left: "1100px",
    padding: "20px",
    borderRadius: "15px",
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

  // Estilos adicionales para los contenedores duplicados
  const container2Style = {
    ...containerStyle,
    top: "380px", // Ajusta la posición vertical del segundo contenedor
  };

  const container3Style = {
    ...containerStyle,
    top: "580px", // Ajusta la posición vertical del tercer contenedor
  };

  return (
    <div>
      <Navbar2 />
      <div style={{ display: "flex", position: "relative" }}>
        <img src={imgaacerca} alt="Logo" className="logo-image" style={backgroundImageStyle} />
        <div style={containerStyle}>
          <div style={contentStyle}>
            <div style={imageContainerStyle}>
              {/* Aquí inserta la imagen del primer contenedor */}
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
              {/* Aquí inserta la imagen del segundo contenedor */}
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
              {/* Aquí inserta la imagen del tercer contenedor */}
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
