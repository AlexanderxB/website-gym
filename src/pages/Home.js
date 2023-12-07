// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import imghome from "../assets/images/imgbienvenida1.png";
import imghome1 from "../assets/images/imgbienvenida2.png";

function Home() {
  const imageStyle = {
    width: "900px", // Ancho de la imagen
    height: "950px", // Altura de la imagen
    marginTop: "8px",
  };

  const contentStyle = {
    marginLeft: "300px", // Margen izquierdo
    marginTop: "250px", // Margen superior
  };

  const h2Style = {
    color: "#B42B51", // Color para h2
  };

  const h4Style = {
    color: "#5D3FD2", // Color para h1
    fontSize: "4px", // Tamaño de la letra para h1
  };

  const h1Style = {
    color: "#000", // Color para h1
    fontSize: "34px", // Tamaño de la letra para h1
  };

  return (
    <div>
        <Navbar />
      <div style={{ display: "flex" }}>
        <img
          src={imghome}
          alt="Logo"
          className="logo-image"
          style={imageStyle}
        />
        <div style={contentStyle}>
          <h2 style={h2Style}>Club de Ejercicios</h2>
          <h1 style={h1Style}> Los Mejores Ejercicios Para</h1>
          <h1 style={h1Style}> Tonificar e Hipertrofiar Tus</h1>
          <h4 style={{ ...h4Style, fontSize: "70px" }}>Musculos</h4>
          <img
            src={imghome1}
            alt="Logo"
            className="logo-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
