import React, { useState } from "react";
import axios from "axios";

function GuardarTareas() {
  const [tarea, setTarea] = useState(""); // Estado para el nombre de la tarea
  const [infoTarea, setInfoTarea] = useState(""); // Estado para la información de la tarea

  const handleFormSubmit = async (e) => {
    e.preventDefault(); // Prevenir el envío del formulario por defecto

    // Crear un objeto con los datos de la tarea
    const nuevaTarea = {
      tarea: tarea,
      infotarea: infoTarea,
    };

    try {
      // Realizar una solicitud POST al servidor con los datos de la tarea
      const response = await axios.post("http://localhost:3001/tareas", nuevaTarea);
      alert("Tarea guardada:", response.data);

      // Limpiar los campos después de guardar la tarea
      setTarea("");
      setInfoTarea("");
    } catch (error) {
      console.error("Error al guardar la tarea:", error);
    }
  };

  return (
    <div>
      <h1>Guardar tareas</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="tarea">Nombre de la tarea:</label>
        <input
          type="text"
          name="tarea"
          placeholder="Tarea a guardar"
          value={tarea}
          onChange={(e) => setTarea(e.target.value)}
        />
        <br />
        <label htmlFor="infoTarea">Info de la tarea:</label>
        <textarea
          name="infoTarea"
          placeholder="Info de la tarea"
          value={infoTarea}
          onChange={(e) => setInfoTarea(e.target.value)}
        />
        <br />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default GuardarTareas;

