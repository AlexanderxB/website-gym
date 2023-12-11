// src/pages/AcercaNosotros.js
import React, { useState } from "react";
import Navbar2 from "../components/Navbar2";
import imgmedidas from "../assets/images/imgmedidas.png";

function MedidasCorporales() {
  const [hombros, setHombros] = useState("");
  const [espalda, setEspalda] = useState("");
  const [pecho, setPecho] = useState("");
  const [cintura, setCintura] = useState("");
  const [gluteos, setGluteos] = useState("");
  const [bicepDerecho, setBicepDerecho] = useState("");
  const [bicepIzquierdo, setBicepIzquierdo] = useState("");
  const [antebrazoDerecho, setAntebrazoDerecho] = useState("");
  const [antebrazoIzquierdo, setAntebrazoIzquierdo] = useState("");
  const [piernaDerecha, setPiernaDerecha] = useState("");
  const [piernaIzquierda, setPiernaIzquierda] = useState("");
  const [buttonHover, setButtonHover] = useState(false);

  const containerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "550px",
    height: "750px",
    position: "absolute",
    top: "140px",
    left: "100px",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
  };

  const inputStyle = {
    width: "100%",
    marginBottom: "20px",
  };

  const labelStyle = {
    marginBottom: "5px",
    marginLeft: "10px",
  };

  const titleStyle = {
    textAlign: "center",
    marginBottom: "20px",
  };

  const buttonStyle = {
    backgroundColor: buttonHover ? "#7F63EC" : "#B42B51",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const backgroundImageStyle = {
    position: "fixed",
    top: 80,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
  };

  const additionalContainerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "450px",
    height: "450px",
    position: "absolute",
    top: "440px",
    left: "1400px",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
  };

  const additionalContainerStyle2 = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "450px",
    height: "450px",
    position: "absolute",
    top: "440px",
    left: "780px",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
  };


  // Identificador (id) del primer contenedor
  const firstContainerId = "medidasCorporales";

  return (
    <div>
      <Navbar2 />
      <img src={imgmedidas} alt="Background" style={backgroundImageStyle} />
      <div style={{ display: "flex", position: "relative" }}>
        {/* Primer contenedor */}
        <div style={containerStyle}>
          <h2 style={titleStyle}>Medidas Corporales</h2>
             <h2 style={{ textAlign: "left" }}>Mes/año</h2>
          <label htmlFor="hombros" style={labelStyle}>
            Hombros
          </label>
          <input
            type="text"
            id="hombros"
            value={hombros}
            onChange={(e) => setHombros(e.target.value)}
            placeholder="Ingrese su medida en centímetros"
            style={inputStyle}
          />

          <label htmlFor="pecho" style={labelStyle}>
            Pecho
          </label>
          <input
            type="text"
            id="pecho"
            value={pecho}
            onChange={(e) => setPecho(e.target.value)}
            placeholder="Ingrese su medida en centímetros"
            style={inputStyle}
          />

          <label htmlFor="cintura" style={labelStyle}>
            Cintura
          </label>
          <input
            type="text"
            id="cintura"
            value={cintura}
            onChange={(e) => setCintura(e.target.value)}
            placeholder="Ingrese su medida en centímetros"
            style={inputStyle}
          />

          <label htmlFor="gluteos" style={labelStyle}>
            Glúteos
          </label>
          <input
            type="text"
            id="gluteos"
            value={gluteos}
            onChange={(e) => setGluteos(e.target.value)}
            placeholder="Ingrese su medida en centímetros"
            style={inputStyle}
          />

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: 1, marginRight: "10px" }}>
              <label htmlFor="bicepDerecho" style={labelStyle}>
                Bícep Derecho
              </label>
              <input
                type="text"
                id="bicepDerecho"
                value={bicepDerecho}
                onChange={(e) => setBicepDerecho(e.target.value)}
                placeholder="Ingrese su medida en centímetros"
                style={inputStyle}
              />
            </div>

            <div style={{ flex: 1, marginLeft: "10px" }}>
              <label htmlFor="bicepIzquierdo" style={labelStyle}>
                Bícep Izquierdo
              </label>
              <input
                type="text"
                id="bicepIzquierdo"
                value={bicepIzquierdo}
                onChange={(e) => setBicepIzquierdo(e.target.value)}
                placeholder="Ingrese su medida en centímetros"
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: 1, marginRight: "10px" }}>
              <label htmlFor="antebrazoDerecho" style={labelStyle}>
                Antebrazo Derecho
              </label>
              <input
                type="text"
                id="antebrazoDerecho"
                value={antebrazoDerecho}
                onChange={(e) => setAntebrazoDerecho(e.target.value)}
                placeholder="Ingrese su medida en centímetros"
                style={inputStyle}
              />
            </div>

            <div style={{ flex: 1, marginLeft: "10px" }}>
              <label htmlFor="antebrazoIzquierdo" style={labelStyle}>
                Antebrazo Izquierdo
              </label>
              <input
                type="text"
                id="antebrazoIzquierdo"
                value={antebrazoIzquierdo}
                onChange={(e) => setAntebrazoIzquierdo(e.target.value)}
                placeholder="Ingrese su medida en centímetros"
                style={inputStyle}
              />
            </div>
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{ flex: 1, marginRight: "10px" }}>
              <label htmlFor="piernaDerecha" style={labelStyle}>
                Pierna Derecha
              </label>
              <input
                type="text"
                id="piernaDerecha"
                value={piernaDerecha}
                onChange={(e) => setPiernaDerecha(e.target.value)}
                placeholder="Ingrese su medida en centímetros"
                style={inputStyle}
              />
            </div>

            <div style={{ flex: 1, marginLeft: "10px" }}>
              <label htmlFor="piernaIzquierda" style={labelStyle}>
                Pierna Izquierda
              </label>
              <input
                type="text"
                id="piernaIzquierda"
                value={piernaIzquierda}
                onChange={(e) => setPiernaIzquierda(e.target.value)}
                placeholder="Ingrese su medida en centímetros"
                style={inputStyle}
              />
            </div>
          </div>

          <button
            style={buttonStyle}
            onMouseOver={() => setButtonHover(true)}
            onMouseOut={() => setButtonHover(false)}
          >
            Guardar
          </button>
        </div>
        {/* Cierre del primer contenedor */}

        {/* Nuevo contenedor a la derecha con identificador (id) */}
        <div style={additionalContainerStyle} id={firstContainerId}>
          <h2 style={titleStyle}>Medidas Corporales Iniciales</h2>
        </div>
        {/* Nuevo contenedor adicional al lado del primero */}
        <div style={additionalContainerStyle2} id="otroContenedor">
          {/* Contenido del segundo contenedor */}
          <h2 style={titleStyle}>Medidas Corporales Mensuales</h2>
        </div>
      </div>
    </div>
  );
}

export default MedidasCorporales;
