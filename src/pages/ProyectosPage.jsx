import { useEffect, useState } from "react";
import proyectosData from "../data/proyectos.json";

function ProyectosPage() {
  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    setProyectos(proyectosData);
  }, []);

  return (
    <div>
      <h2>🧩 Proyectos del Equipo</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {proyectos.map((proyecto) => (
          <div key={proyecto.id} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "1rem",
            width: "300px",
            backgroundColor: "#fff"
          }}>
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <strong>Tecnologías:</strong>
            <ul>
              {proyecto.tecnologias.map((tech, i) => (
                <li key={i}>{tech}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProyectosPage;
