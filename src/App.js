import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AcercaNosotros from "./pages/AcercaNosotros";
import IniciarSesion from "./pages/IniciarSesion";
import Registro from "./pages/Registro";
import Consejos from "./pages/Consejos";
import MedidasCorporales from "./pages/MedidasCorporales";
import PlanEntrenamiento from "./pages/PlanEntrenamiento";
import EjerciciosGrupoMuscular from "./pages/EjerciciosGrupoMuscular";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AcercaNosotros" element={<AcercaNosotros />} />
          <Route path="/IniciarSesion" element={<IniciarSesion />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Consejos" element={<Consejos />} />
          <Route path="/MedidasCorporales" element={<MedidasCorporales />} />
          <Route path="/PlanEntrenamiento" element={<PlanEntrenamiento />} />
          <Route path="/EjerciciosGrupoMuscular" element={<EjerciciosGrupoMuscular />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
