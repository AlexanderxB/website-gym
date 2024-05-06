// src/pages/AcercaNosotros.js
import React from "react";
import Navbar from "../components/Navbar";
import imgaacerca from "../assets/images/Imgacerca.png";
import logo from "../assets/images/logogym2.png";


function AcercaNosotros() {
  const imageStyle = {
    width: "1900px",   
    height: "850px",
    marginTop: "80px",  
  };

  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",   
    width: "450px",             
    height: "600px",            
    position: "absolute",       
    top: "180px",                
    left: "1250px",              
    padding: "20px",             
    borderRadius: "15px",        
  };

  const logoStyle = {
    width: "100%",   
    marginBottom: "20px",  
  };

  const volverStyle = {
    position: "absolute",        
    bottom: "10px",               
    right: "10px",                
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const volverIconStyle = {
    width: "40px",   
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

