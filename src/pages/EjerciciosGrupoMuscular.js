// src/pages/AcercaNosotros.js
import React, { useState } from "react";
import Navbar2 from "../components/Navbar2";
import imggrupomuscular from "../assets/images/imggrupomuscular.webp";

function EjerciciosGrupoMuscular() {
  const [hoveredButton, setHoveredButton] = useState(null);



  const backgroundImageStyle = {
    position: "fixed",
    top: 80,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    };

  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    width: "1000px",
    height: "80px",
    position: "absolute",
    top: "100px",
    left: "450px",
    padding: "0px",
    borderRadius: "15px",
  };

  const buttonContainerStyle = {
    display: "flex",
    marginLeft: "20px",
  };

  const buttonStyle = {
    width: "100px",
    height: "40px",
    marginRight: "20px",
    marginTop: "20px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s",  // Transición suave para el cambio de color
  };

  const hombrosStyle = {
    ...buttonStyle,
    backgroundColor: hoveredButton === "Hombros" ? "#7F63EC" : "#B42B51",
    color: "#fff",
  };

  const espaldaStyle = {
    ...buttonStyle,
    backgroundColor: hoveredButton === "Espalda" ? "#7F63EC" : "#B42B51",
    color: "#fff",
  };

  const pechoStyle = {
    ...buttonStyle,
    backgroundColor: hoveredButton === "Pecho" ? "#7F63EC" : "#B42B51",
    color: "#fff",
  };

  const AbdomenStyle = {
    ...buttonStyle,
    backgroundColor: hoveredButton === "Abdomen" ? "#7F63EC" : "#B42B51",
    color: "#fff",
  };

  const BicepStyle = {
    ...buttonStyle,
    backgroundColor: hoveredButton === "Bicep" ? "#7F63EC" : "#B42B51",
    color: "#fff",
  };

  

  const TricepStyle = {
    ...buttonStyle,
    backgroundColor: hoveredButton === "Tricep" ? "#7F63EC" : "#B42B51",
    color: "#fff",
  };

  const AntebrazoStyle = {
    ...buttonStyle,
    backgroundColor: hoveredButton === "Antebrazo" ? "#7F63EC" : "#B42B51",
    color: "#fff",
  };

  const GluteoStyle = {
    ...buttonStyle,
    backgroundColor: hoveredButton === "Gluteo" ? "#7F63EC" : "#B42B51",
    color: "#fff",
  };

  const PiernaStyle = {
    ...buttonStyle,
    backgroundColor: hoveredButton === "Pierna" ? "#7F63EC" : "#B42B51",
    color: "#fff",
  };

  const matrixContainerStyle = {
    display: "grid",
    gridTemplateRows: "repeat(4, 1fr)",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "20px",
    position: "absolute",
    top: "250px",
    marginLeft: "480px",
    bottom:"-780px"
  };

  const matrixItemStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "300px",
    height: "200px",
    borderRadius: "10px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const matrixItemStyleWithTextHeight = {
    width: "300px",
    height: "40px",
  };



  // Repite este patrón para los demás botones

  return (
    <div>
      <Navbar2 />
      <div style={{ display: "flex", position: "relative" }}>
        <img src={imggrupomuscular} alt="Logo" className="logo-image" style={backgroundImageStyle} />
        <div style={containerStyle}>
        <h2 style={{ textAlign: "center", color: "#fff" }}>Elija una Parte del Cuerpo</h2>
          <div style={buttonContainerStyle}>
            <button
              style={hombrosStyle}
              onMouseEnter={() => setHoveredButton("Hombros")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Hombros
            </button>
            <button
              style={espaldaStyle}
              onMouseEnter={() => setHoveredButton("Espalda")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Espalda
            </button>
            <button
              style={pechoStyle}
              onMouseEnter={() => setHoveredButton("Pecho")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Pecho
            </button>
            <button
              style={AbdomenStyle}
              onMouseEnter={() => setHoveredButton("Abdomen")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Abdomen
            </button>
            <button
              style={BicepStyle}
              onMouseEnter={() => setHoveredButton("Bicep")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Bicep
            </button>
            <button
              style={TricepStyle}
              onMouseEnter={() => setHoveredButton("Tricep")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Tricep
            </button>
            <button
              style={AntebrazoStyle}
              onMouseEnter={() => setHoveredButton("Antebrazo")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Antebrazo
            </button>
            <button
              style={GluteoStyle}
              onMouseEnter={() => setHoveredButton("Gluteo")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Gluteo
            </button>
            <button
              style={PiernaStyle}
              onMouseEnter={() => setHoveredButton("Pierna")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Pierna
            </button>
            </div>
        </div>
          <div style={matrixContainerStyle}>
            {/* Fila 1 */}
            <div style={matrixItemStyle}>
              <p style={matrixItemStyleWithTextHeight}>Contenedor 1</p>
            </div>
            <div style={matrixItemStyle}>
              <p style={matrixItemStyleWithTextHeight}>Contenedor 2</p>
            </div>
            <div style={matrixItemStyle}>
              <p style={matrixItemStyleWithTextHeight}>Contenedor 3</p>
            </div>

            {/* Fila 2 */}
            <div style={{ ...matrixItemStyle, ...matrixItemStyleWithTextHeight }}>
              <h3>Texto 1</h3>
            </div>
            <div style={{ ...matrixItemStyle, ...matrixItemStyleWithTextHeight }}>
              <h3>Texto 2</h3>
            </div>
            <div style={{ ...matrixItemStyle, ...matrixItemStyleWithTextHeight }}>
              <h3>Texto 3</h3>
            </div>
          
          
          
            {/* Fila 3 */}
            <div style={matrixItemStyle}>
              <p style={matrixItemStyleWithTextHeight}>Contenedor 4</p>
            </div>
            <div style={matrixItemStyle}>
              <p style={matrixItemStyleWithTextHeight}>Contenedor 5</p>
            </div>
            <div style={matrixItemStyle}>
              <p style={matrixItemStyleWithTextHeight}>Contenedor 6</p>
            </div>

            {/* Fila 4 */}
            <div style={{ ...matrixItemStyle, ...matrixItemStyleWithTextHeight }}>
              <h3>Texto 4</h3>
            </div>
            <div style={{ ...matrixItemStyle, ...matrixItemStyleWithTextHeight }}>
              <h3>Texto 5</h3>
            </div>
            <div style={{ ...matrixItemStyle, ...matrixItemStyleWithTextHeight }}>
              <h3>Texto 6</h3>
            </div>
          </div>
      </div>

    </div>
     
    
  );
}

export default EjerciciosGrupoMuscular;
