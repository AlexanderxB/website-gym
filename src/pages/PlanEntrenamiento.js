// src/pages/AcercaNosotros.js
import React, { useState } from "react";
import Navbar2 from "../components/Navbar2";
import imgplanentrenamiento from "../assets/images/imgplanentrenamiento.png";

function PlanEntrenamiento() {
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
    left: "800px",
    padding: "0px",
    borderRadius: "15px",
  };

  const categoriaEjercicioContainerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    width: "410px",
    height: "750px",
    borderRadius: "10px",
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start", // Alinea el contenido en la parte superior
    position: "absolute",
    top: "120px",
    left: "80px",
    padding: "20px",
  };

  const categoriaEjercicioTitleStyle = {
    fontSize: "24px", // Ajusta el tamaño de la letra según tus necesidades
    fontWeight: "bold",
    marginBottom: "10px",
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

  const lunesStyle = {
    ...buttonStyle,
    backgroundColor: hoveredButton === "Lunes" ? "#7F63EC" : "#B42B51",
    color: "#fff",
  };

  const martesStyle = {
    ...buttonStyle,
    backgroundColor: hoveredButton === "Martes" ? "#7F63EC" : "#B42B51",
    color: "#fff",
  };

  const miercolesStyle = {
    ...buttonStyle,
    backgroundColor: hoveredButton === "Miercoles" ? "#7F63EC" : "#B42B51",
    color: "#fff",
  };

  const juevesStyle = {
    ...buttonStyle,
    backgroundColor: hoveredButton === "Jueves" ? "#7F63EC" : "#B42B51",
    color: "#fff",
  };

  const viernesStyle = {
    ...buttonStyle,
    backgroundColor: hoveredButton === "Viernes" ? "#7F63EC" : "#B42B51",
    color: "#fff",
  };

  

  const sabadoStyle = {
    ...buttonStyle,
    backgroundColor: hoveredButton === "Sabado" ? "#7F63EC" : "#B42B51",
    color: "#fff",
  };

  const domingoStyle = {
    ...buttonStyle,
    backgroundColor: hoveredButton === "Domingo" ? "#7F63EC" : "#B42B51",
    color: "#fff",
  };


  const matrixContainerStyle = {
    display: "grid",
    gridTemplateRows: "repeat(4, 1fr)",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: "20px",
    position: "absolute",
    top: "250px",
    marginLeft: "580px",
    bottom:"-780px"
  };

  const matrixItemStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.4)",
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
        <img src={imgplanentrenamiento} alt="Logo" className="logo-image" style={backgroundImageStyle} />
        {/* Contenedor de categoría de ejercicio */}
        <div style={categoriaEjercicioContainerStyle} id="miContenedorId">
          <h1 style={categoriaEjercicioTitleStyle}>Categoría de Ejercicio</h1>
          {/* Aquí puedes agregar cualquier contenido adicional que desees dentro del contenedor */}
        </div>
        <div style={containerStyle}>
        <h2 style={{ textAlign: "center", color: "#fff" }}>Elija un Día</h2>
          <div style={buttonContainerStyle}>
            <button
              style={lunesStyle}
              onMouseEnter={() => setHoveredButton("Lunes")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Lunes
            </button>
            <button
              style={martesStyle}
              onMouseEnter={() => setHoveredButton("Martes")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Martes
            </button>
            <button
              style={miercolesStyle}
              onMouseEnter={() => setHoveredButton("Miercoles")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Miercoles
            </button>
            <button
              style={juevesStyle}
              onMouseEnter={() => setHoveredButton("Jueves")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Jueves
            </button>
            <button
              style={viernesStyle}
              onMouseEnter={() => setHoveredButton("Viernes")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Viernes
            </button>
            <button
              style={sabadoStyle}
              onMouseEnter={() => setHoveredButton("Sabado")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Sabado
            </button>
            <button
              style={domingoStyle}
              onMouseEnter={() => setHoveredButton("Domingo")}
              onMouseLeave={() => setHoveredButton(null)}
            >
              Domingo
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
            <div style={matrixItemStyle}>
              <p style={matrixItemStyleWithTextHeight}>Contenedor 4</p>
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
            <div style={{ ...matrixItemStyle, ...matrixItemStyleWithTextHeight }}>
              <h3>Texto 4</h3>
            </div>

            
          
          
          
            {/* Fila 3 */}
            <div style={matrixItemStyle}>
              <p style={matrixItemStyleWithTextHeight}>Contenedor 5</p>
            </div>
            <div style={matrixItemStyle}>
              <p style={matrixItemStyleWithTextHeight}>Contenedor 6</p>
            </div>
            <div style={matrixItemStyle}>
              <p style={matrixItemStyleWithTextHeight}>Contenedor 7</p>
            </div>
            <div style={matrixItemStyle}>
              <p style={matrixItemStyleWithTextHeight}>Contenedor 8</p>
            </div>

            {/* Fila 4 */}
            <div style={{ ...matrixItemStyle, ...matrixItemStyleWithTextHeight }}>
              <h3>Texto 5</h3>
            </div>
            <div style={{ ...matrixItemStyle, ...matrixItemStyleWithTextHeight }}>
              <h3>Texto 6</h3>
            </div>
            <div style={{ ...matrixItemStyle, ...matrixItemStyleWithTextHeight }}>
              <h3>Texto 7</h3>
            </div>
            <div style={{ ...matrixItemStyle, ...matrixItemStyleWithTextHeight }}>
              <h3>Texto 8</h3>
            </div>
          </div>
      </div>

    </div>
    
  );
}

export default PlanEntrenamiento;


