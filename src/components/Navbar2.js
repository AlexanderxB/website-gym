// Navbar2.js
import React, { useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Navbar.css";
import logoImage from "../assets/images/logogym.png";
import UserContext from "../UserContext";

function Navbar2() {
  const { cedulaUsuario } = useContext(UserContext);
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const navbarStyle = {
    position: "fixed", 
    left: 0,
    width: "100%",
    zIndex: 1000, 
  };

  return (
    <header style={navbarStyle}>
      <Link to="/">
        <img src={logoImage} alt="Logo" className="logo-image" />
      </Link>
      <nav ref={navRef}>
        <Link to="/Consejos">Consejos</Link>
        <Link to="/MedidasCorporales">Medidas Corporales</Link>
        <Link to="/PlanEntrenamiento">Plan de Entrenamiento</Link>
        <Link to="/CreaRutina">Crea tu rutina</Link>
        <Link to="/">CerrarSesion</Link>
        <Link to="#">Bienvenido Usuario: {cedulaUsuario}</Link>
        <button
          className="nav-btn nav-close-btn"
          onClick={showNavbar}
        >
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar2;
