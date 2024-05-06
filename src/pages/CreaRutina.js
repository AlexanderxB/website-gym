//CrearRutirna.js
import React, { useState, useEffect, useContext  } from "react";
import Navbar2 from "../components/Navbar2";
import imggrupomuscular from "../assets/images/imggrupomuscular.webp";
import UserContext from "../UserContext";
import axios from "axios";

const URI = 'http://localhost:4000/api/ejerciciosgrupomuscular';
const URI2 = 'http://localhost:4000/api/planentrenamiento';

function CreaRutina() {

  const { cedulaUsuario } = useContext(UserContext);

  const [parteCuerpo, setParteCuerpo] = useState("");
  const [videoParteCuerpo, setVideoParteCuerpo] = useState("");
  const [nombreEjercicio, setNombreEjercicio] = useState("");
  const [ejercicios, setEjercicios] = useState([]);
  const [ejerciciosPorParteCuerpo, setEjerciciosPorParteCuerpo] = useState([]); 
  const [mensajeVerificacion, setMensajeVerificacion] = useState("");
  const [ejerciciosSeleccionados, setEjerciciosSeleccionados] = useState([]);
  const [ejerciciosSeleccionadosRutina, setEjerciciosSeleccionadosRutina] = useState([]);
  const [Cedula, setCedula] = useState(""); // Estado para almacenar el nombre de usuario
  const [diaSeleccionado, setDiaSeleccionado] = useState(""); // Estado para almacenar el día seleccionado
  const [ejerciciosSeleccionadosIds, setEjerciciosSeleccionadosIds] = useState([]);
  
  
  const actualizarCedula = (event) => {
    setCedula(event.target.value); // Actualiza el estado del nombre de usuario cuando cambia el campo de entrada
  };

  const diasSemana = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];


  const [hoveredButton, setHoveredButton] = useState(null);

  // Controlador de eventos para el cambio de día seleccionado
  const handleDiaSeleccionadoChange = (event) => {
    setDiaSeleccionado(event.target.value); // Actualiza el estado del día seleccionado
  };

  const actualizarParteCuerpo = (event) => {
    setParteCuerpo (event.target.value); 
  };

  const actualizarVideoParteCuerpo = (event) => {
    setVideoParteCuerpo(event.target.value); 
  };

  const actualizarNombreEjercicio = (event) => {
    setNombreEjercicio(event.target.value); 
  };

  const actualizarEjerciciosPorParteCuerpo = (event) => {
    setEjerciciosPorParteCuerpo (event.target.value); 
  };  

  const actualizarEjercicios = (event) => {
    setEjercicios (event.target.value); 
  };  

  const actualizarEjerciciosSeleccionados = (event) => {
    setEjerciciosSeleccionados (event.target.value); 
  }; 

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
    height: "200px",
    position: "absolute",
    top: "100px",
    left: "450px",
    padding: "0px",
    borderRadius: "15px",
  };

  const whiteContainerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    width: "400px",
    height: "650px", // ajusta la altura según sea necesario
    position: "absolute",
    top: "220px", // ajusta la posición vertical según sea necesario
    left: "100px", // ajusta la posición horizontal según sea necesario
    padding: "20px", // añade espacio de relleno según sea necesario
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // añade una sombra según sea necesario
  };

  const MidContainerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    width: "400px",
    height: "650px", // ajusta la altura según sea necesario
    position: "absolute",
    top: "220px", // ajusta la posición vertical según sea necesario
    left: "700px", // ajusta la posición horizontal según sea necesario
    padding: "20px", // añade espacio de relleno según sea necesario
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // añade una sombra según sea necesario
  };
  
  const derechoContainerStyle = {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    width: "400px",
    height: "650px", // ajusta la altura según sea necesario
    position: "absolute",
    top: "220px", // ajusta la posición vertical según sea necesario
    left: "1400px", // ajusta la posición horizontal según sea necesario
    padding: "20px", // añade espacio de relleno según sea necesario
    borderRadius: "15px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // añade una sombra según sea necesario
  };

  const buttonContainerStyle = {
    display: "flex",
    marginLeft: "20px",
  };

  const buttonStyle = {
    width: "150px",
    height: "45px",
    marginRight: "20px",
    marginTop: "0px",
    cursor: "pointer",
    border: "none",
    borderRadius: "5px",
    transition: "background-color 0.3s", // Transición suave para el cambio de color
  };

  /*const handleParteCuerpo = async (parteSeleccionada) => {
    try {
      setParteCuerpo(parteSeleccionada);
      console.log(parteSeleccionada);
    } catch (error) {
      console.error("Error al elegir una parte del cuerpo:", error);
    }
  }; */


  const handleParteCuerpo = async (parteSeleccionada) => {
    try {
        setParteCuerpo(parteSeleccionada);
        console.log(parteSeleccionada);

        // Obtener los ejercicios filtrados por parte del cuerpo y cédula del usuario
        const response = await axios.get(`${URI}?Parte_Cuerpo=${parteSeleccionada}&Cedula=${cedulaUsuario}`);
        const ejerciciosFiltrados = response.data.body;

        // Función para filtrar ejercicios por parte del cuerpo
        function filtrarEjercicios(partesCuerpo, parteSeleccionada) {
            return partesCuerpo.filter(ejercicio => ejercicio.Parte_Cuerpo.toLowerCase() === parteSeleccionada.toLowerCase());
        }

        // Función para verificar si hay ejercicios asociados a la parte del cuerpo seleccionada
        /*function verificarEjercicios(parteSeleccionada, ejercicios) {
            if (ejercicios.length === 0) {
                console.log("No se encuentra una lista de ejercicios correspondientes a esta parte del cuerpo. Por favor, registre previamente todos los ejercicios que desea almacenar.");
            } else {
                console.log("Ejercicios de " + parteSeleccionada + ":");
                ejercicios.forEach(ejercicio => {
                    console.log(ejercicio.Nombre_Ejercicio);
                });
            }
        }*/

        // Función para verificar si hay ejercicios asociados a la parte del cuerpo seleccionada y la cédula del usuario
        function verificarEjercicios(parteSeleccionada, ejercicios, cedulaUsuario) {
          // Filtrar ejercicios por la cédula del usuario logueado
          const ejerciciosUsuario = ejercicios.filter(ejercicio => ejercicio.Cedula === cedulaUsuario);
          if (ejerciciosUsuario.length === 0) {
              console.log("No se encuentra una lista de ejercicios correspondientes a esta parte del cuerpo para el usuario actual. Por favor, registre previamente todos los ejercicios que desea almacenar.");
              setMensajeVerificacion("No existen ejercicios almacenados");
          } else {
              console.log("Ejercicios de " + parteSeleccionada + " para el usuario con cédula " + cedulaUsuario + ":");
              //let mensaje = "Ejercicios de " + parteSeleccionada + " para el usuario con cédula " + cedulaUsuario + ":\n";               
              let mensaje="";

              ejerciciosUsuario.forEach(ejercicio => {
                  console.log(ejercicio.Nombre_Ejercicio);
                  mensaje += `${ejercicio.Nombre_Ejercicio}\n\n`;
              });
              setMensajeVerificacion(mensaje);
          }
        }

        // Filtrar ejercicios por parte del cuerpo
        const ejerciciosFiltradosFunc = filtrarEjercicios(ejerciciosFiltrados, parteSeleccionada);

        // Verificar si hay ejercicios asociados a la parte del cuerpo seleccionada
        //verificarEjercicios(parteSeleccionada, ejerciciosFiltradosFunc);

        // Verificar si hay ejercicios asociados a la parte del cuerpo seleccionada
        verificarEjercicios(parteSeleccionada, ejerciciosFiltradosFunc, cedulaUsuario);

        // Verificar si hay ejercicios registrados para la parte del cuerpo seleccionada y el usuario logueado
        if (Array.isArray(ejerciciosFiltrados) && ejerciciosFiltrados.length > 0) {
            // Actualizar la lista de ejercicios
            setEjerciciosPorParteCuerpo(ejerciciosFiltrados);
        } else {
            // Mostrar un mensaje si no hay ejercicios registrados
            alert("No se encuentra una lista de ejercicios correspondientes a esta parte del cuerpo para el usuario actual.");
        }
    } catch (error) {
        console.error("Error al elegir una parte del cuerpo:", error);
    }
  };
  
  const handleAgregar = async () => {
    try {
      // Verificar si se han llenado todos los campos
      if (!diasSemana || !videoParteCuerpo || !parteCuerpo) {
        alert("Por favor, complete todos los campos");
        return;
      }
  
      // Envía los datos del ejercicio al backend
      const response = await axios.post(URI, {
        Cedula: cedulaUsuario,
        Parte_Cuerpo: parteCuerpo,
        Video_Parte_Cuerpo: videoParteCuerpo,
        Nombre_Ejercicio: nombreEjercicio
      });
  
      console.log(response.data);
  
      // Limpiar los campos después de guardar los datos exitosamente
      setNombreEjercicio("");
      setVideoParteCuerpo("");
      setParteCuerpo(null); // Deseleccionar el botón
  
    } catch (error) {
      console.error("Error al agregar ejercicio a la base de datos:", error);
    }
  };

  const handleAgregarAlResumen = (ejercicioSeleccionado) => {
    
    const ejerciciosArray = ejercicioSeleccionado.split('\n').filter(ejercicio => ejercicio.trim() !== '');

    // Mostrar los ejercicios en la consola
    console.log("Array de ejercicios:", ejerciciosArray);
    setEjerciciosSeleccionadosRutina(ejerciciosArray);
  };

  const handleGuardarCambios = async () => {
    try {
      // Verificar si se ha seleccionado un día de la semana
      if (!diaSeleccionado) {
        alert("Por favor, seleccione un día de la semana.");
        return;
      }
  
      // Verificar si se han seleccionado ejercicios
      /*if (ejerciciosSeleccionadosIds.length === 0) {
        alert("Por favor, seleccione al menos un ejercicio.");
        return;
      }*/

        // Iterar sobre los ejercicios seleccionados para guardar
        for (const ejercicio in ejerciciosSeleccionados) {
          if (ejerciciosSeleccionados[ejercicio]) {
              // Realizar la solicitud GET para obtener los datos del ejercicio a eliminar
              const response = await axios.get(`${URI}/${cedulaUsuario}`);

              // Obtener los datos del ejercicio a eliminar
              const ejercicioAGuardar = response.data.body;

              // Imprimir información para depuración
              console.log("Nombre del ejercicio seleccionado:", ejercicio);
              console.log("Cédula del usuario:", cedulaUsuario);
              console.log("Ejercicio a guardar:", ejercicioAGuardar);

              // Buscar el ejercicio por su nombre dentro del array ejercicioAGuardar
              const ejercicioEncontrado = ejercicioAGuardar.find(ej => ej.Nombre_Ejercicio === ejercicio);

              // Verificar si se encontró el ejercicio
              if (ejercicioEncontrado) {
                  // Realizar la solicitud para eliminar el ejercicio utilizando su ID_EjerciciosGrupoMuscular
                  console.log(`Agregando ejercicio con ID ${ejercicioEncontrado.ID_EjerciciosGrupoMuscular}`);

                  const response = await axios.post(URI2, {
                    ID_EjerciciosGrupoMuscular: ejercicioEncontrado.ID_EjerciciosGrupoMuscular,
                    Dia_Entrenamiento: diaSeleccionado
                  });

                  console.log(response.data);

                  console.log(`Se ha guardado el ejercicio ${ejercicio} a la base de datos.`);                                                
                } else {
                  console.error(`No se encontró el ejercicio "${ejercicio}" para el usuario con cédula "${cedulaUsuario}"`);
              }
          }
      }
        
      // Limpiar los campos después de guardar los datos exitosamente
      setDiaSeleccionado("");
      setEjerciciosSeleccionadosIds([]);
  
      // Mostrar un mensaje de éxito al usuario
      alert("¡El día de la semana y los ejercicios seleccionados han sido guardados correctamente!");
  
    } catch (error) {
      console.error("Error al guardar los datos en la base de datos:", error);
    }
  };

  /*const handleToggleCheckbox = (ejercicioSeleccionado) => {
    // Realizar una copia del estado actual de los ejercicios seleccionados
    const nuevosEjerciciosSeleccionados = [...ejerciciosSeleccionados];
    // Verificar si el ejercicio está actualmente seleccionado
    const ejercicioIndex = nuevosEjerciciosSeleccionados.findIndex(ejercicio => ejercicio === ejercicioSeleccionado);

    // Si el ejercicio no está en la lista, añadirlo; de lo contrario, eliminarlo
    if (ejercicioIndex === -1) {
      nuevosEjerciciosSeleccionados.push(ejercicioSeleccionado);
    } else {
      nuevosEjerciciosSeleccionados.splice(ejercicioIndex, 1);
    }

    // Actualizar el estado de los ejercicios seleccionados
    setEjerciciosSeleccionados(nuevosEjerciciosSeleccionados);

    // Mostrar en la consola los ejercicios seleccionados
    console.log("Los ejercicios que el usuario seleccionó fueron estos:", nuevosEjerciciosSeleccionados);
  };*/

  const handleToggleCheckbox = (ejercicioSeleccionado) => {
    // Realizar una copia del estado actual de los ejercicios seleccionados
    const nuevosEjerciciosSeleccionados = { ...ejerciciosSeleccionados };
    // Verificar si el ejercicio está actualmente seleccionado
    if (nuevosEjerciciosSeleccionados[ejercicioSeleccionado]) {
      delete nuevosEjerciciosSeleccionados[ejercicioSeleccionado];
    } else {
      nuevosEjerciciosSeleccionados[ejercicioSeleccionado] = true;
    }
    // Actualizar el estado de los ejercicios seleccionados
    setEjerciciosSeleccionados(nuevosEjerciciosSeleccionados);
    console.log("Los ejercicios que el usuario seleccionó fueron estos:", nuevosEjerciciosSeleccionados);
  };

  const handleEliminar = async () => {
    try {
        // Verificar si se han seleccionado ejercicios para eliminar
        if (Object.keys(ejerciciosSeleccionados).length === 0) {
            alert("Por favor, selecciona al menos un ejercicio para eliminar.");
            return;
        }

        // Iterar sobre los ejercicios seleccionados para eliminar
        for (const ejercicio in ejerciciosSeleccionados) {
            if (ejerciciosSeleccionados[ejercicio]) {
                // Realizar la solicitud GET para obtener los datos del ejercicio a eliminar
                const response = await axios.get(`${URI}/${cedulaUsuario}`);

                // Obtener los datos del ejercicio a eliminar
                const ejercicioAEliminar = response.data.body;

                // Imprimir información para depuración
                console.log("Nombre del ejercicio seleccionado:", ejercicio);
                console.log("Cédula del usuario:", cedulaUsuario);
                console.log("Ejercicio a eliminar:", ejercicioAEliminar);

                // Buscar el ejercicio por su nombre dentro del array ejercicioAEliminar
                const ejercicioEncontrado = ejercicioAEliminar.find(ej => ej.Nombre_Ejercicio === ejercicio);

                // Verificar si se encontró el ejercicio
                if (ejercicioEncontrado) {
                    // Realizar la solicitud para eliminar el ejercicio utilizando su ID_EjerciciosGrupoMuscular
                    console.log(`Eliminando ejercicio con ID ${ejercicioEncontrado.ID_EjerciciosGrupoMuscular}`);

                    await axios.delete(`${URI}`, {
                        data: { ID_EjerciciosGrupoMuscular: ejercicioEncontrado.ID_EjerciciosGrupoMuscular }
                    });

                    console.log(`Se ha eliminado el ejercicio ${ejercicio} de la base de datos.`);                                                
                  } else {
                    console.error(`No se encontró el ejercicio "${ejercicio}" para el usuario con cédula "${cedulaUsuario}"`);
                }
            }
        }

        // Limpiar el estado de ejercicios seleccionados después de la eliminación
        setEjerciciosSeleccionados({});

        // Mostrar un mensaje de éxito al usuario
        alert("El ejercicio seleccionado ha sido eliminado correctamente. Vuelva a elegir la parte del cuerpo, de click sobre el boton añadir a resumen rutina y vera los cambios!");
    } catch (error) {
        console.error("Error al eliminar los ejercicios de la base de datos:", error);
        // Puedes manejar el error mostrando un mensaje al usuario o realizando otra acción adecuada
        // Por ejemplo: alert("Error al eliminar los ejercicios. Por favor, inténtalo de nuevo más tarde.");
    }
};

  return (
    <div>
      <Navbar2 />
      <div style={{ display: "flex", position: "relative" }}>
        <img src={imggrupomuscular} alt="Logo" className="logo-image" style={backgroundImageStyle} />
        <div style={containerStyle}>
          <h2 style={{ textAlign: "center", color: "#fff" }}>Elija una Parte del Cuerpo</h2>
          <div style={buttonContainerStyle}>
            <button
              style={{ ...buttonStyle, backgroundColor: parteCuerpo === "Hombros" ? "#7F63EC" : "#B42B51", color: "#fff" }}
              onClick={() => handleParteCuerpo("Hombros")}
            >
              Hombros
            </button>
            <button
              style={{ ...buttonStyle, backgroundColor: parteCuerpo === "Espalda" ? "#7F63EC" : "#B42B51", color: "#fff" }}
              onClick={() => handleParteCuerpo("Espalda")}
            >
              Espalda
            </button>
            <button
              style={{ ...buttonStyle, backgroundColor: parteCuerpo === "Pecho" ? "#7F63EC" : "#B42B51", color: "#fff" }}
              onClick={() => handleParteCuerpo("Pecho")}
            >
              Pecho
            </button>
            <button
              style={{ ...buttonStyle, backgroundColor: parteCuerpo === "Abdomen" ? "#7F63EC" : "#B42B51", color: "#fff" }}
              onClick={() => handleParteCuerpo("Abdomen")}
            >
              Abdomen
            </button>
            <button
              style={{ ...buttonStyle, backgroundColor: parteCuerpo === "Bicep" ? "#7F63EC" : "#B42B51", color: "#fff" }}
              onClick={() => handleParteCuerpo("Bicep")}
            >
              Bicep
            </button>
            <button
              style={{ ...buttonStyle, backgroundColor: parteCuerpo === "Tricep" ? "#7F63EC" : "#B42B51", color: "#fff" }}
              onClick={() => handleParteCuerpo("Tricep")}
            >
              Tricep
            </button>
            <button
              style={{ ...buttonStyle, backgroundColor: parteCuerpo === "Antebrazo" ? "#7F63EC" : "#B42B51", color: "#fff" }}
              onClick={() => handleParteCuerpo("Antebrazo")}
            >
              Antebrazo
            </button>
            <button
              style={{ ...buttonStyle, backgroundColor: parteCuerpo === "Gluteo" ? "#7F63EC" : "#B42B51", color: "#fff" }}
              onClick={() => handleParteCuerpo("Gluteo")}
            >
              Gluteo
            </button>
            <button
              style={{ ...buttonStyle, backgroundColor: parteCuerpo === "Pierna" ? "#7F63EC" : "#B42B51", color: "#fff" }}
              onClick={() => handleParteCuerpo("Pierna")}
            >
              Pierna
            </button>
          </div>
        </div>

        {/* Nuevo contenedor blanco */}
        <div style={whiteContainerStyle}>
          <h2 style={{ textAlign: "center", color: "#000" }}>Lista ejercicios grupo muscular</h2>
          <div style={{ height: "425px", marginTop: "20px", backgroundColor: "transparent", overflowY: "scroll" }}>
            {mensajeVerificacion ? (
              <pre>{mensajeVerificacion}</pre>
            ) : (
              <p>No se ha realizado ninguna verificación todavía.</p>
            )}
          </div>

          
          {/* Botones después del título "Lista Ejercicios" */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "35px" }}>
            {/* Botón 2 */}
            <button
              style={{ ...buttonStyle, backgroundColor: hoveredButton === "Boton2" ? "#7F63EC" : "#B42B51", color: "#fff", marginLeft: "190px" }}
              onMouseEnter={() => setHoveredButton("Boton2")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={() => handleAgregarAlResumen(mensajeVerificacion)}
            >
              Añadir a Resumen Rutina
            </button>
          </div>
        </div>

        {/* Nuevo contenedor blanco */}
        <div style={MidContainerStyle}>
          <h2 style={{ textAlign: "center", color: "#000" }}>Resumen de la Rutina</h2>
          {/* Spinner con los días de la semana */}
          <select style={{ width: "100%", marginBottom: "20px" }} onChange={handleDiaSeleccionadoChange}>
            {diasSemana.map((dia, index) => (
              <option key={index} value={dia}>{dia}</option>
            ))}
          </select>
          <h2 style={{ textAlign: "left", color: "#000" }}>Ejercicios seleccionados</h2>
          <p style={{ fontSize: "12px", fontStyle: "italic" }}>Recuerda para eliminar un ejercicio debes primero seleccionarlo. Solo puedes eliminar de a uno</p>
          <div style={{ height: "335px", marginTop: "10px", backgroundColor: "transparent", overflowY: "scroll" }}>
            {ejerciciosSeleccionadosRutina.map((ejercicio, index) => (
              <div key={index} style={{ marginBottom: "5px", backgroundColor: `rgba(127, 99, 236, ${ejerciciosSeleccionados[ejercicio] ? "0.4" : "0"})` }}>
                <input
                  type="checkbox"
                  id={`checkbox-${index}`}
                  checked={ejerciciosSeleccionados[ejercicio] || false}
                  onChange={() => handleToggleCheckbox(ejercicio)}
                  style={{ marginRight: "10px" }}
                />
                <label htmlFor={`checkbox-${index}`}>{ejercicio}</label>
              </div>
            ))}
          </div>

          {/* Botones después del título "Lista Ejercicios" */}
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "30px" }}>
            {/* Botón 1 */}
            
            <button
              style={{ ...buttonStyle, backgroundColor: hoveredButton === "Boton1" ? "#7F63EC" : "#B42B51", color: "#fff" }}
              onMouseEnter={() => setHoveredButton("Boton1")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={handleEliminar}
            >
              Eliminar ejercicio de Base de datos
            </button>
            {/* Botón 2 */}
            <button
              style={{ ...buttonStyle, backgroundColor: hoveredButton === "Boton3" ? "#7F63EC" : "#B42B51", color: "#fff", marginLeft: "20px" }}
              onMouseEnter={() => setHoveredButton("Boton2")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={handleGuardarCambios}
            >
              Guardar Cambios
            </button>
            
          </div>

        </div>



         {/* Nuevo contenedor blanco */}
         <div style={derechoContainerStyle}>
          <h2 style={{ textAlign: "center", color: "#000" }}>Agregar Ejercicio a la Base de Datos</h2>
          <label htmlFor="NameExersice">Nombre Completo del Ejercicio:</label>
          <input
            type="text"
            id="nombreEjercicio"
            value={nombreEjercicio}
            onChange={actualizarNombreEjercicio} 
            placeholder="Ingrese el nombre del ejercicio completo"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          <label htmlFor="NameUrl">Url:</label>
          <input
            type="text"
            id="videoParteCuerpo"
            value={videoParteCuerpo}
            onChange={actualizarVideoParteCuerpo} 
            placeholder="Ingrese la URL completa del video"
            style={{ width: "100%", marginBottom: "10px" }}
          />
          {/* Botones después del campo de entrada */}
          <div>
            {/* Botón 1 */}
            <button
              style={{ ...buttonStyle, backgroundColor: hoveredButton === "Boton4" ? "#7F63EC" : "#B42B51", color: "#fff", marginTop: "350px", marginLeft: "210px", }}
              onMouseEnter={() => setHoveredButton("Boton4")}
              onMouseLeave={() => setHoveredButton(null)}
              onClick={handleAgregar}
            >
              Agregar 
            </button>       
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreaRutina;
