
import { useEffect, useState } from 'react';

const Clima = () => {
  const [datosClima, setDatosClima] = useState(null);
  const [ciudad, setCiudad] = useState('Buenos Aires');
  const [error, setError] = useState(null);

  const API_KEY = 'f576f03945c56553cfffd6246ae3d29d';

  useEffect(() => {
    const obtenerClima = async () => {
      try {
        const respuesta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${API_KEY}&units=metric&lang=es`);
        if (!respuesta.ok) throw new Error('No se pudo obtener el clima');
        const data = await respuesta.json();
        setDatosClima(data);
      } catch (err) {
        setError(err.message);
      }
    };

    obtenerClima();
  }, [ciudad]);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Clima Actual</h2>
      <input
        type="text"
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
        placeholder="Ingresá una ciudad"
      />
      {error && <p>{error}</p>}
      {datosClima && (
        <div>
          <p><strong>Ciudad:</strong> {datosClima.name}</p>
          <p><strong>Temperatura:</strong> {datosClima.main.temp}°C</p>
          <p><strong>Condición:</strong> {datosClima.weather[0].description}</p>
        </div>
      )}
    </div>
  );
};

export default Clima;
