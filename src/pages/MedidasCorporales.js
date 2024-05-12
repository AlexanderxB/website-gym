//MedidasCorporales.js
import React, { useState, useEffect, useContext } from "react";
import Navbar2 from "../components/Navbar2";
import imgmedidas from "../assets/images/imgmedidas.png";
import UserContext from "../UserContext";
import axios from "axios";

const URI = 'http://localhost:4000/api/medidascorporales';

const currentDate = new Date();
const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
const currentYear = currentDate.getFullYear();


function MedidasCorporales() {

  const { cedulaUsuario } = useContext(UserContext);

  const [Hombros, setHombros] = useState("");
  const [Pecho, setPecho] = useState("");
  const [Cintura, setCintura] = useState("");
  const [Gluteo, setGluteo] = useState("");
  const [Bicep_Derecho, setBicep_Derecho] = useState("");
  const [Bicep_Izquierdo, setBicep_Izquierdo] = useState("");
  const [Antebrazo_Derecho, setAntebrazo_Derecho] = useState("");
  const [Antebrazo_Izquierdo, setAntebrazo_Izquierdo] = useState("");
  const [Pierna_Derecha, setPierna_Derecha] = useState("");
  const [Pierna_Izquierda, setPierna_Izquierda] = useState("");

  const [buttonHoverGuardar, setButtonHoverGuardar] = useState(false);
  const [buttonHoverGenerar, setButtonHoverGenerar] = useState(false);
  const [buttonHoverMostrar, setButtonHoverMostrar] = useState(false);

  // Estado separado para los datos del usuario de cada contenedor
  const [medidasCorporales1, setMedidasCorporales1] = useState(null);
  const [medidasCorporales2, setMedidasCorporales2] = useState(null);

  useEffect(() => {
    console.log("Medidas corporales actualizadas 1:", medidasCorporales1);
  }, [medidasCorporales1]);

  const actualizarHombros = (event) => {
    setHombros(event.target.value); 
  };

  const actualizarPecho = (event) => {
    setPecho(event.target.value); 
  };

  const actualizarCintura = (event) => {
    setCintura(event.target.value); 
  };

  
  const actualizarGluteo = (event) => {
    setGluteo(event.target.value); 
  };

  const actualizarBicep_Derecho = (event) => {
    setBicep_Derecho(event.target.value); 
  };

  const actualizarBicep_Izquierdo = (event) => {
    setBicep_Izquierdo(event.target.value); 
  };

  const actualizarAntebrazo_Derecho = (event) => {
    setAntebrazo_Derecho(event.target.value); 
  };

  const actualizarAntebrazo_Izquierdo = (event) => {
    setAntebrazo_Izquierdo(event.target.value); 
  };

  const actualizarPierna_Derecha = (event) => {
    setPierna_Derecha(event.target.value); 
  };

  const actualizarPierna_Izquierda = (event) => {
    setPierna_Izquierda(event.target.value); 
  };

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

  const buttonStyleGuardar = {
    backgroundColor: buttonHoverGuardar ? "#7F63EC" : "#B42B51",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonStyleGenerar = {
    backgroundColor: buttonHoverGenerar ? "#7F63EC" : "#B42B51",
    color: "white",
    border: "none",
    padding: "10px",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  const buttonStyleMostrar = {
    backgroundColor: buttonHoverMostrar ? "#7F63EC" : "#B42B51",
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
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    width: "450px",
    height: "740px",
    position: "absolute",
    top: "140px",
    left: "1400px",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
  };

  const additionalContainerStyle2 = {
    backgroundColor: "rgba(255, 255, 255, 0.7)",
    width: "450px",
    height: "740px",
    position: "absolute",
    top: "140px",
    left: "780px",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "left",
    display: "flex",
    flexDirection: "column",
  };


  // Identificador (id) del primer contenedor
  const firstContainerId = "medidasCorporales";

  const handleGenerar = async () => {  
    try {
      // Obtener el mes y el año seleccionados por el usuario
      const mesSeleccionado = document.getElementById("selectorMes").value;
      const añoSeleccionado = document.getElementById("selectorAño").value;
      const meses = {
        1: 'enero',
        2: 'febrero',
        3: 'marzo',
        4: 'abril',
        5: 'mayo',
        6: 'junio',
        7: 'julio',
        8: 'agosto',
        9: 'septiembre',
        10: 'octubre',
        11: 'noviembre',
        12: 'diciembre',
      };
      
      const mesSeleccionadoNombre = meses[parseInt(mesSeleccionado)];

      console.log("Mes seleccionado:", mesSeleccionado);
      console.log("Año seleccionado:", añoSeleccionado);
  
      // Realizar la solicitud al backend para obtener los datos de medidas corporales
      const response = await axios.get(`${URI}/${cedulaUsuario}`);
  
      // Verificar si se recibieron datos
      if (response.data) {
        // Filtrar los datos basados en el mes y el año seleccionados
        const medidasFiltradas = response.data.body.filter(item => item.Mes.toLowerCase() === mesSeleccionadoNombre && item.Año === parseInt(añoSeleccionado));
        console.log("Medidas filtradas:", medidasFiltradas);
        
        // Actualizar el estado con los datos filtrados
        setMedidasCorporales1({ error: false, status: 200, body: medidasFiltradas });
  
        // Acciones adicionales con los datos actualizados
        console.log("Datos actualizados:", medidasFiltradas);
  
        procesarDatosActualizados(medidasFiltradas);
      } else {
        console.error("No se recibieron datos del servidor");
      }
    } catch (error) {
      console.error("Error al obtener las medidas corporales:", error);
    }
  };

  const handleMostrar2 = async () => { 
    try {
      // Realizar la solicitud al backend para obtener los datos de medidas corporales
      const response = await axios.get(`${URI}/${cedulaUsuario}`);
  
      // Verificar si se recibieron datos
      if (response.data) {
        // Actualizar el estado con los datos recibidos del backend
        setMedidasCorporales2(response.data);
        
        // Acciones adicionales con los datos actualizados
        console.log("Datos actualizados:", response.data);
        
        procesarDatosActualizados(response.data);
      } else {
        console.error("No se recibieron datos del servidor");
      }
    } catch (error) {
      console.error("Error al obtener las medidas corporales:", error);
    }
  };
  

  // Función para procesar los datos actualizados
  const procesarDatosActualizados = (data) => {
    // Realizar acciones adicionales con los datos actualizados
    console.log("Procesando datos actualizados:", data);
  };

  const handleMedidasCorporales = async () => {
    try {
      // Obtener la cédula del usuario autenticado (reemplaza 'getCedulaUsuarioAutenticado' con el método real para obtener la cédula del usuario)
      //const cedulaUsuario = getCedulaUsuarioAutenticado();
  
      // Verificar si se han llenado todos los campos
      if (!Hombros || !Pecho || !Cintura || !Gluteo || !Bicep_Derecho || !Bicep_Izquierdo || !Antebrazo_Derecho || !Antebrazo_Izquierdo || !Pierna_Derecha || !Pierna_Izquierda ) {
        alert("Por favor, complete todos los campos");
        return;
      }
  
      // Envía los datos del registro al backend de la tabla medidas corporales
      const response = await axios.post(URI, {
        Cedula: cedulaUsuario, 
        Mes: currentMonth,
        Año: currentYear,
        Hombros: Hombros,
        Pecho: Pecho,
        Cintura: Cintura,
        Gluteo: Gluteo,
        Bicep_Derecho: Bicep_Derecho,
        Bicep_Izquierdo: Bicep_Izquierdo,
        Antebrazo_Derecho: Antebrazo_Derecho,
        Antebrazo_Izquierdo: Antebrazo_Izquierdo,
        Pierna_Derecha: Pierna_Derecha,
        Pierna_Izquierda: Pierna_Izquierda
      });
  
      console.log(response.data);
  
      // Limpiar los campos después de guardar los datos exitosamente
      setHombros("");
      setPecho("");
      setCintura("");
      setGluteo("");
      setBicep_Derecho("");
      setBicep_Izquierdo("");
      setAntebrazo_Derecho("");
      setAntebrazo_Izquierdo("");
      setPierna_Derecha("");
      setPierna_Izquierda("");
      alert("Feliciades a guardaro sus medidas corporales");
  
    } catch (error) {
      console.error("Error al ingresar las medidas corporales:", error);
    }
  };

  
  return (
    <div>
      <Navbar2 cedulaUsuario={cedulaUsuario}/>
      <img src={imgmedidas} alt="Background" style={backgroundImageStyle} />
      <div style={{ display: "flex", position: "relative" }}>
        {/* Primer contenedor */}
        <div style={containerStyle}>
          <h2 style={titleStyle}>Medidas Corporales</h2>
          <h2 style={{ textAlign: "left" }}>{currentMonth} / {currentYear}</h2>
          <label htmlFor="hombros" style={labelStyle}>
            Hombros
          </label>
          <input
            type="text"
            id="hombros"
            value={Hombros}
            onChange={actualizarHombros} 
            placeholder="Ingrese su medida en centímetros"
            style={inputStyle}
          />

          <label htmlFor="pecho" style={labelStyle}>
            Pecho
          </label>
          <input
            type="text"
            id="pecho"
            value={Pecho}
            onChange={actualizarPecho} 
            placeholder="Ingrese su medida en centímetros"
            style={inputStyle}
          />

          <label htmlFor="cintura" style={labelStyle}>
            Cintura
          </label>
          <input
            type="text"
            id="cintura"
            value={Cintura}
            onChange={actualizarCintura} 
            placeholder="Ingrese su medida en centímetros"
            style={inputStyle}
          />

          <label htmlFor="gluteos" style={labelStyle}>
            Glúteos
          </label>
          <input
            type="text"
            id="gluteos"
            value={Gluteo}
            onChange={actualizarGluteo} 
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
                value={Bicep_Derecho}
                onChange={actualizarBicep_Derecho} 
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
                value={Bicep_Izquierdo}
                onChange={actualizarBicep_Izquierdo} 
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
                value={Antebrazo_Derecho}
                onChange={actualizarAntebrazo_Derecho} 
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
                value={Antebrazo_Izquierdo}
                onChange={actualizarAntebrazo_Izquierdo} 
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
                value={Pierna_Derecha}
                onChange={actualizarPierna_Derecha} 
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
                value={Pierna_Izquierda}
                onChange={actualizarPierna_Izquierda} 
                placeholder="Ingrese su medida en centímetros"
                style={inputStyle}
              />
            </div>
          </div>

          <button
            style={buttonStyleGuardar}
            onMouseOver={() => setButtonHoverGuardar(true)}
            onMouseOut={() => setButtonHoverGuardar(false)}
            onClick={handleMedidasCorporales}
          >
            Guardar
          </button>
        </div>
        
        {/* Nuevo contenedor a la derecha con identificador (id) */}
        <div style={additionalContainerStyle} id={firstContainerId}>
          <h2 style={titleStyle}>Medidas Corporales Iniciales</h2>

          <button
            style={buttonStyleMostrar}
            onMouseOver={() => setButtonHoverMostrar(true)}
            onMouseOut={() => setButtonHoverMostrar(false)}
            onClick={handleMostrar2}
          >
            Mostrar
          </button>

          {/* Mostrar los datos de medidas corporales */}
          {medidasCorporales2 && medidasCorporales2.body && medidasCorporales2.body.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <h2>Información del Usuario</h2>
            <p>Hombros: {medidasCorporales2.body[0].Hombros}</p>
            <p>Pecho: {medidasCorporales2.body[0].Pecho}</p>
            <p>Cintura: {medidasCorporales2.body[0].Cintura}</p>
            <p>Glúteo: {medidasCorporales2.body[0].Gluteo}</p>
            <p>Bicep Derecho: {medidasCorporales2.body[0].Bicep_Derecho}</p>
            <p>Bicep Izquierdo: {medidasCorporales2.body[0].Bicep_Izquierdo}</p>
            <p>Antebrazo Derecho: {medidasCorporales2.body[0].Antebrazo_Derecho}</p>
            <p>Antebrazo Izquierdo: {medidasCorporales2.body[0].Antebrazo_Izquierdo}</p>
            <p>Pierna Derecha: {medidasCorporales2.body[0].Pierna_Derecha}</p>
            <p>Pierna Izquierda: {medidasCorporales2.body[0].Pierna_Izquierda}</p>
          </div>
        )} 
        </div>

        {/* Nuevo contenedor adicional al lado del primero */}
        <div style={additionalContainerStyle2} id="otroContenedor">
          {/* Contenido del segundo contenedor */}
          <h2 style={titleStyle}>Medidas Corporales Mensuales</h2>
          <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px", marginBottom: "30px" }}>
            {/* Selector de meses */}
            <select id="selectorMes" style={{ width: "45%" }}>
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={i + 1}>{new Date(currentYear, i).toLocaleString('default', { month: 'long' })}</option>
              ))}
            </select>
            {/* Selector de años */}
            <select id="selectorAño" style={{ width: "45%" }}>
              {/* Agregar el año anterior al primer año actual */}
              <option key={currentYear - 1} value={currentYear - 1}>{currentYear - 1}</option>
              {/* Mostrar los años desde el año actual hasta 10 años después */}
              {Array.from({ length: 12 }, (_, i) => (
                <option key={i} value={currentYear + i}>{currentYear + i}</option>
              ))}
            </select>
          </div>
           {/* Botón */}
           <button
            style={buttonStyleGenerar}
            onMouseOver={() => setButtonHoverGenerar(true)}
            onMouseOut={() => setButtonHoverGenerar(false)}
            onClick={handleGenerar}
          >
            Generar
          </button>
          {/* Mostrar los datos de medidas corporales filtradas */}
           {/* Mostrar los datos de medidas corporales */}
           {medidasCorporales1 && medidasCorporales1.body && medidasCorporales1.body.length > 0 && (
          <div style={{ marginTop: "20px" }}>
            <h2>Información del Usuario</h2>
            <p>Hombros: {medidasCorporales1.body[0].Hombros}</p>
            <p>Pecho: {medidasCorporales1.body[0].Pecho}</p>
            <p>Cintura: {medidasCorporales1.body[0].Cintura}</p>
            <p>Glúteo: {medidasCorporales1.body[0].Gluteo}</p>
            <p>Bicep Derecho: {medidasCorporales1.body[0].Bicep_Derecho}</p>
            <p>Bicep Izquierdo: {medidasCorporales1.body[0].Bicep_Izquierdo}</p>
            <p>Antebrazo Derecho: {medidasCorporales1.body[0].Antebrazo_Derecho}</p>
            <p>Antebrazo Izquierdo: {medidasCorporales1.body[0].Antebrazo_Izquierdo}</p>
            <p>Pierna Derecha: {medidasCorporales1.body[0].Pierna_Derecha}</p>
            <p>Pierna Izquierda: {medidasCorporales1.body[0].Pierna_Izquierda}</p>
          </div>
        )}       
        </div>
      </div>
    </div>
  );
}

export default MedidasCorporales;
