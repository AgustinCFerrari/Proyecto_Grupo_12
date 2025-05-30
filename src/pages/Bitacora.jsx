function Bitacora() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>📅 Bitácora del Proyecto</h2>
      <ul>
        <li>✔️ [10/05/2025] Inicio del proyecto: estructura base creada con Vite + React</li>
        <li>✔️ [11/05/2025] Asignación de roles:
          <ul>
            <li>Diego Arias - Coordinación General y documentación</li>
            <li>Flavio Benítez - Maquetación, Sidebar y Portada</li>
            <li>Agustín Ferrari - React Router, lógica y estados</li>
            <li>Sergio Godoy - Componentes reutilizables y consumo de datos</li>
          </ul>
        </li>
        <li>✔️ [12/05/2025] Se integró React Router con rutas dinámicas para cada sección</li>
        <li>✔️ [14/05/2025] Implementación de la sección Presentación con tarjetas por integrante</li>
        <li>✔️ [15/05/2025] Desarrollo de perfiles individuales: nombre, habilidades, tecnologías, proyectos ficticios</li>
        <li>✔️ [18/05/2025] Incorporación de archivo JSON con películas y renderizado dinámico</li>
        <li>✔️ [20/05/2025] Consumo de API pública de clima en tiempo real</li>
        <li>✔️ [22/05/2025] Agregado del Sidebar fijo con íconos y enlaces a todas las secciones</li>
        <li>✔️ [24/05/2025] Mejora UX/UI: reorganización visual, centrado, tipografías, contraste y responsividad</li>
        <li>✔️ [26/05/2025] Componentes reutilizables: tarjetas, cabeceras, contenedores</li>
        <li>✔️ [29/05/2025] Publicación en GitHub con historial limpio de commits</li>
        <li>✔️ [29/05/2025] Deploy en Vercel funcionando correctamente</li>
      </ul>

      <h3>Organización y Metodología</h3>
      <p>
        El equipo trabajó con metodología ágil, usando grupos de WhatsApp y reuniones breves por Discord para dividir tareas.
        Cada integrante se hizo cargo de su sección, validando integración con el resto del equipo en puntos de control diarios.
        El enfoque fue colaborativo, priorizando la claridad del código y la experiencia de usuario.
      </p>
    </div>
  );
}

export default Bitacora;
