// Navbar.js
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Navbar.css";
import logoImage from "../assets/images/logogym.png";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const navbarStyle = {
    position: "fixed", 
    top: 0,
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
        <Link to="/">Home</Link>
        <Link to="/AcercaNosotros">Acerca de Nosotros</Link>
        <Link to="/IniciarSesion">Iniciar Sesion</Link>
        <Link to="/Registro">Registro</Link>
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

export default Navbar;
