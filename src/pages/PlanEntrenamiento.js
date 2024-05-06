// src/pages/AcercaNosotros.js
import React, { useState, useEffect, useContext  } from "react";
import Navbar2 from "../components/Navbar2";
import imgplanentrenamiento from "../assets/images/imgplanentrenamiento.png";
import UserContext from "../UserContext";
import ReactPlayer from "react-player";
import axios from "axios";

const URI = 'http://localhost:4000/api/planentrenamiento';
const URI2 = 'http://localhost:4000/api/ejerciciosgrupomuscular';

function PlanEntrenamiento() {

  const { cedulaUsuario } = useContext(UserContext);
  const [diaSemana, setDiaSemana] = useState("");
  const [ejerciciosPorParteCuerpo, setEjerciciosPorParteCuerpo] = useState([]);
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState(null); 
  const [videoURL, setVideoURL] = useState('');

  const actualizarDiaSemana = (event) => {
    setDiaSemana (event.target.value); 
  };

  const actualizarEjerciciosPorParteCuerpo = (event) => {
    setEjerciciosPorParteCuerpo (event.target.value); 
  };

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
    justifyContent: "flex-start", 
    position: "absolute",
    top: "120px",
    left: "80px",
    padding: "20px",
  };

  const categoriaEjercicioTitleStyle = {
    fontSize: "24px", 
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
    transition: "background-color 0.3s", 
  };

  const buttonStyle1 = {
    width: "150px", 
    height: "50px",
    marginRight: "20px",
    marginTop: "20px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s", 
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

  const containerStyleVideo = {
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    width: "1200px",
    height: "500px",
    position: "absolute",
    top: "300px", 
    left: "600px", 
    padding: "0px",
    borderRadius: "15px",
  };

  /*const handleDiaSeleccionado = async (diaSeleccionado) => {
    try {
      setDiaSemana(diaSeleccionado);
      console.log("El día que seleccionó el usuario fue:", diaSeleccionado);
  
      // Realizar la solicitud GET al servidor para obtener los datos del día seleccionado
      const response = await axios.get(URI, {
        params: {
          Dia_Entrenamiento: diaSeleccionado
        }
      });
  
      // Filtrar los datos para obtener solo los correspondientes al día seleccionado
      const datosDiaSeleccionado = response.data.body.filter(item => item.Dia_Entrenamiento === diaSeleccionado);
  
      // Extraer el ID del plan de entrenamiento correspondiente al día seleccionado
      const idPlanEntrenamiento = datosDiaSeleccionado[0]?.ID_PlanEntrenamiento;
  
      // Mostrar los datos filtrados en la consola
      console.log("Datos del día seleccionado:", datosDiaSeleccionado);

      // Verificar si no se encontraron datos para el día seleccionado
      if (datosDiaSeleccionado.length === 0) {
        // Mostrar un mensaje en el contenedor
        alert("No está asignada una rutina para este día: " + diaSeleccionado);
        // Limpiar la lista de ejercicios
        setEjerciciosPorParteCuerpo([]);
        return;
      }
  
      // Realizar una nueva solicitud para obtener la lista de ejercicios asociados con ese plan de entrenamiento y usuario
      const responseEjercicios = await axios.get(URI2, {
        params: {
          ID_PlanEntrenamiento: idPlanEntrenamiento,
          Cedula: cedulaUsuario
        }
      });
  
      // Filtrar los ejercicios por parte del cuerpo y usuario
      const ejerciciosFiltrados = responseEjercicios.data.body.filter(ejercicio => ejercicio.Cedula === cedulaUsuario);
  
      // Actualizar el estado con la lista de ejercicios obtenida
      setEjerciciosPorParteCuerpo(ejerciciosFiltrados);
  
      // Mostrar los datos filtrados en la consola
      console.log("Datos del ejercicio seleccionado:", ejerciciosFiltrados);
    } catch (error) {
      console.error("Error al elegir un día de la semana:", error);
    }
  };*/

  const handleDiaSeleccionado = async (diaSeleccionado) => {
    try {
      setDiaSemana(diaSeleccionado);
      console.log("El día que seleccionó el usuario fue:", diaSeleccionado);
  
      // Realizar la solicitud GET al servidor para obtener los datos del día seleccionado
      const response = await axios.get(URI, {
        params: {
          Dia_Entrenamiento: diaSeleccionado
        }
      });
  
      // Filtrar los datos para obtener solo los correspondientes al día seleccionado
      const datosDiaSeleccionado = response.data.body.filter(item => item.Dia_Entrenamiento === diaSeleccionado);
  
      // Extraer el ID del plan de entrenamiento correspondiente al día seleccionado
      const idPlanEntrenamiento = datosDiaSeleccionado[0]?.ID_PlanEntrenamiento;
  
      // Mostrar los datos filtrados en la consola
      console.log("Datos del día seleccionado:", datosDiaSeleccionado);
  
      // Verificar si no se encontraron datos para el día seleccionado
      if (datosDiaSeleccionado.length === 0) {
        // Mostrar un mensaje en el contenedor
        alert("No está asignada una rutina para este día: " + diaSeleccionado);
        // Limpiar la lista de ejercicios
        setEjerciciosPorParteCuerpo([]);
        return;
      }
  
      // Realizar una nueva solicitud para obtener la lista de ejercicios asociados con ese plan de entrenamiento y usuario
      const responseEjercicios = await axios.get(URI2, {
        params: {
          ID_PlanEntrenamiento: idPlanEntrenamiento,
          Cedula: cedulaUsuario
        }
      });
  
      // Filtrar los ejercicios por parte del cuerpo y usuario
      const ejerciciosFiltrados = responseEjercicios.data.body.filter(ejercicio => ejercicio.Cedula === cedulaUsuario);
  
      // Actualizar el estado con la lista de ejercicios obtenida
      setEjerciciosPorParteCuerpo(ejerciciosFiltrados);
  
      // Mostrar los datos filtrados en la consola
      console.log("Datos del ejercicio seleccionado:", ejerciciosFiltrados);
  
      // Verificar si los ID_EjerciciosGrupoMuscular son iguales
      const idsDiaSeleccionado = datosDiaSeleccionado.map(item => item.ID_EjerciciosGrupoMuscular);
      const idsEjerciciosSeleccionados = ejerciciosFiltrados.map(ejercicio => ejercicio.ID_EjerciciosGrupoMuscular);
      const sonIguales = JSON.stringify(idsDiaSeleccionado) === JSON.stringify(idsEjerciciosSeleccionados);
  
      if (!sonIguales) {
        // Mostrar un mensaje en el contenedor
        alert("No está asignada una rutina para este día: " + diaSeleccionado);
        // Limpiar la lista de ejercicios
        setEjerciciosPorParteCuerpo([]);
        return;
      }
    } catch (error) {
      console.error("Error al elegir un día de la semana:", error);
    }
  };

  /*const handleEjercicioSeleccionado = async (ejercicioSeleccionado) => {
    try {
      console.log("El ejercicio seleccionado fue:", ejercicioSeleccionado);
      setEjercicioSeleccionado(ejercicioSeleccionado);
  
      // Realizar la solicitud GET al servidor para obtener el video correspondiente al ejercicio seleccionado
      const responseVideo = await axios.get(URI2, {
        params: {
          Nombre_Ejercicio: ejercicioSeleccionado
        }
      });
  
      // Extraer el video correspondiente al ejercicio seleccionado
      const videoEjercicio = responseVideo.data.body[0]?.Video_Parte_Cuerpo;
      console.log(videoEjercicio);
  
      // Actualizar el estado con la URL del video
      setVideoURL(videoEjercicio);
    } catch (error) {
      console.error("Error al obtener el video del ejercicio seleccionado:", error);
    }
  };*/

  const handleEjercicioSeleccionado = async (ejercicioSeleccionado) => {
    try {
      console.log("El ejercicio seleccionado fue:", ejercicioSeleccionado);
      setEjercicioSeleccionado(ejercicioSeleccionado);
  
      // Realizar la solicitud GET al servidor para obtener los ejercicios correspondientes al nombre seleccionado
      const response = await axios.get(URI2, {
        params: {
          Nombre_Ejercicio: ejercicioSeleccionado
        }
      });
  
      // Filtrar la respuesta para encontrar el ejercicio específico seleccionado
      const ejercicioEncontrado = response.data.body.find(ejercicio => ejercicio.Nombre_Ejercicio === ejercicioSeleccionado);
  
      if (ejercicioEncontrado) {
        // Extraer la URL del video correspondiente al ejercicio encontrado
        const videoEjercicio = ejercicioEncontrado.Video_Parte_Cuerpo;
        console.log(videoEjercicio);
  
        // Actualizar el estado con la URL del video
        setVideoURL(videoEjercicio);
      } else {
        console.error("No se encontró el ejercicio en la base de datos.");
      }
    } catch (error) {
      console.error("Error al obtener el video del ejercicio seleccionado:", error);
    }
  };

  const handleBorrar = async (ejercicioSeleccionado) => {
    try {
      console.log("El ejercicio seleccionado fue:", ejercicioSeleccionado);
      setEjercicioSeleccionado(ejercicioSeleccionado);
  
      // Realizar la solicitud GET al servidor para obtener los ejercicios correspondientes al nombre seleccionado
      const response = await axios.get(URI2, {
        params: {
          Nombre_Ejercicio: ejercicioSeleccionado
        }
      });
  
      // Filtrar la respuesta para encontrar el ejercicio específico seleccionado
      const ejercicioEncontrado = response.data.body.find(ejercicio => ejercicio.Nombre_Ejercicio === ejercicioSeleccionado);
  
      if (ejercicioEncontrado) {
        // Extraer la URL del video correspondiente al ejercicio encontrado
        const videoEjercicio = ejercicioEncontrado.Video_Parte_Cuerpo;
        console.log(videoEjercicio);
  
        // Actualizar el estado con la URL del video
        setVideoURL(videoEjercicio);
      } else {
        console.error("No se encontró el ejercicio en la base de datos.");
      }
    } catch (error) {
      console.error("Error al obtener el video del ejercicio seleccionado:", error);
    }
  };
  

  return (
    <div>
      <Navbar2 />
      <div style={{ display: "flex", position: "relative" }}>
        <img src={imgplanentrenamiento} alt="Logo" className="logo-image" style={backgroundImageStyle} />
        <div style={categoriaEjercicioContainerStyle} id="miContenedorId">
          <h1 style={categoriaEjercicioTitleStyle}>Lista de Ejercicio</h1>
          <div>
            {ejerciciosPorParteCuerpo.map((ejercicio, index) => (
              <div
                key={index}
                onClick={() => handleEjercicioSeleccionado(ejercicio.Nombre_Ejercicio)}
                style={{ backgroundColor: ejercicioSeleccionado === ejercicio.Nombre_Ejercicio ? "#7F63EC" : "transparent", padding: "5px", borderRadius: "5px", cursor: "pointer" }}
              >
                <p>{ejercicio.Nombre_Ejercicio}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", marginTop: "580px" }}>
            {/* Botón 2 */}
            <button
              style={{ ...buttonStyle1, backgroundColor: hoveredButton === "Boton2" ? "#7F63EC" : "#B42B51", color: "#fff", marginLeft: "200px" }}
              onMouseEnter={() => setHoveredButton("Boton2")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleBorrar()}
            >
              Eliminar ejercicio  
            </button>
          </div>
        </div>
        <div style={containerStyle}>
          <h2 style={{ textAlign: "center", color: "#fff", marginLeft:"-230px", }}>Elije un Día</h2>
          <div style={buttonContainerStyle}>
            <button
              style={lunesStyle}
              onMouseEnter={() => setHoveredButton("Lunes")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleDiaSeleccionado("Lunes")}
            >
              Lunes
            </button>
            <button
              style={martesStyle}
              onMouseEnter={() => setHoveredButton("Martes")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleDiaSeleccionado("Martes")}
            >
              Martes
            </button>
            <button
              style={miercolesStyle}
              onMouseEnter={() => setHoveredButton("Miércoles")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleDiaSeleccionado("Miércoles")}
            >
              Miércoles
            </button>
            <button
              style={juevesStyle}
              onMouseEnter={() => setHoveredButton("Jueves")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleDiaSeleccionado("Jueves")}
            >
              Jueves
            </button>
            <button
              style={viernesStyle}
              onMouseEnter={() => setHoveredButton("Viernes")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleDiaSeleccionado("Viernes")}
            >
              Viernes
            </button>
            <button
              style={sabadoStyle}
              onMouseEnter={() => setHoveredButton("Sábado")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleDiaSeleccionado("Sábado")}
            >
              Sábado
            </button>
            <button
              style={domingoStyle}
              onMouseEnter={() => setHoveredButton("Domingo")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleDiaSeleccionado("Domingo")}
            >
              Domingo
            </button>
          </div>
          <h2 style={{ textAlign: "left", color: "#fff", marginLeft: "-150px", marginTop: "50px" }}>{ejercicioSeleccionado}</h2>
        </div>
        <div style={containerStyleVideo}>
          <ReactPlayer
            url={videoURL}
            playing={false}
            volume={0.5}
            width="100%" 
            height="100%" 
          />
      </div>
      </div>
    </div>
  );
}

export default PlanEntrenamiento;