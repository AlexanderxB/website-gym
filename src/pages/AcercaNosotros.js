// src/pages/AcercaNosotros.js
import React from "react";
import Navbar from "../components/Navbar";
import imgaacerca from "../assets/images/Imgacerca.png";
import logo from "../assets/images/logogym2.png";


function AcercaNosotros() {
  const imageStyle = {
    width: "1900px",   // Ancho de la imagen
    height: "850px",
    marginTop: "80px",  // Altura de la imagen
  };

  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",   // Contenedor semi-transparente
    width: "450px",             // Ancho del contenedor
    height: "600px",            // Altura del contenedor
    position: "absolute",       // Posición absoluta
    top: "180px",                // Distancia desde la parte superior
    left: "1250px",              // Distancia desde la izquierda
    padding: "20px",             // Espaciado interno del contenedor
    borderRadius: "15px",        // Esquinas redondeadas
  };

  const logoStyle = {
    width: "100%",   // El logo ocupa el 100% del ancho del contenedor
    marginBottom: "20px",  // Espaciado inferior entre el logo y el texto
  };

  const volverStyle = {
    position: "absolute",        // Posición absoluta para el icono "volver"
    bottom: "10px",               // Distancia desde la parte inferior
    right: "10px",                // Distancia desde la derecha
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const volverIconStyle = {
    width: "40px",   // Ajusta el tamaño de la imagen "volver"
    height: "40px",
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: "flex", position: "relative" }}>
        <img src={imgaacerca} alt="Logo" className="logo-image" style={imageStyle} />
        <div style={containerStyle}>
          {/* Contenido del contenedor */}
          <img src={logo} alt="Logo" className="logo-image" style={logoStyle} />
          <p>Aquí puedes agregar el contenido que desees dentro del contenedor.</p>
          <div style={volverStyle}>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AcercaNosotros;

