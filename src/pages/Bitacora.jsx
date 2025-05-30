function Bitacora() {
  return (
    <div style={{ padding: "2rem" }}>
      <h2>📅 Bitácora del Proyecto</h2>
      <ul>
        <li>✔️ [2025-05-10] Inicio del proyecto: estructura base creada con Vite + React</li>
        <li>✔️ [2025-05-11] Asignación de roles:
          <ul>
            <li>🧩 Diego Arias - Coordinación General y documentación</li>
            <li>🎨 Flavio Benítez - Maquetación, Sidebar y Portada</li>
            <li>🧠 Agustín Ferrari - React Router, lógica y estados</li>
            <li>💡 Sergio Godoy - Componentes reutilizables y consumo de datos</li>
          </ul>
        </li>
        <li>✔️ [2025-05-12] Se integró React Router con rutas dinámicas para cada sección</li>
        <li>✔️ [2025-05-14] Implementación de la sección Presentación con tarjetas por integrante</li>
        <li>✔️ [2025-05-15] Desarrollo de perfiles individuales: nombre, habilidades, tecnologías, proyectos ficticios</li>
        <li>✔️ [2025-05-18] Incorporación de archivo JSON con películas y renderizado dinámico</li>
        <li>✔️ [2025-05-20] Consumo de API pública de clima en tiempo real</li>
        <li>✔️ [2025-05-22] Agregado del Sidebar fijo con íconos y enlaces a todas las secciones</li>
        <li>✔️ [2025-05-24] Mejora UX/UI: reorganización visual, centrado, tipografías, contraste y responsividad</li>
        <li>✔️ [2025-05-26] Componentes reutilizables: tarjetas, cabeceras, contenedores</li>
        <li>✔️ [2025-05-28] Publicación en GitHub con historial limpio de commits</li>
        <li>✔️ [2025-05-29] Deploy en Vercel funcionando correctamente</li>
      </ul>

      <h3>🧠 Organización y Metodología</h3>
      <p>
        El equipo trabajó con metodología ágil, usando grupos de WhatsApp y reuniones breves por Discord para dividir tareas.
        Cada integrante se hizo cargo de su sección, validando integración con el resto del equipo en puntos de control diarios.
        El enfoque fue colaborativo, priorizando la claridad del código y la experiencia de usuario.
      </p>
    </div>
  );
}

export default Bitacora;
