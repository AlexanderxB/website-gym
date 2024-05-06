// src/pages/Home.js
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import imghome from "../assets/images/imgbienvenida1.png";
import imghome1 from "../assets/images/imgbienvenida2.png";

function Home() {
  const imageStyle = {
    width: "900px", 
    height: "950px", 
    marginTop: "8px",
  };

  const contentStyle = {
    marginLeft: "300px", 
    marginTop: "250px", 
  };

  const h2Style = {
    color: "#B42B51", 
  };

  const h4Style = {
    color: "#5D3FD2", 
    fontSize: "4px", 
  };

  const h1Style = {
    color: "#000", 
    fontSize: "34px", 
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
