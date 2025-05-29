
import React, { useEffect, useState } from 'react';
import '/styles/GaleriaPeliculas.css';

const Peliculas = () => {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    fetch('/peliculas.json')
      .then(res => res.json())
      .then(data => setPeliculas(data))
      .catch(err => console.error("Error al cargar las películas:", err));
  }, []);

  return (
    <div className="galeria-peliculas">
      <h2>Listado de Películas</h2>
      <div className="peliculas-grid">
        {peliculas.map(peli => (
          <div className="pelicula-card" key={peli.id}>
            <h3>{peli.titulo}</h3>
            <p><strong>Género:</strong> {peli.genero}</p>
            <p><strong>Año:</strong> {peli.año}</p>
            <p><strong>Director:</strong> {peli.director}</p>
            <p><strong>Descripción:</strong> {peli.descripcion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Peliculas;
