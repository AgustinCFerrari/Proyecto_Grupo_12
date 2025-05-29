import React from "react";
import "/styles/Perfil.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from "react-icons/fa";

const Agustin = () => {
  return (
    <div className="perfil-container">
      <h2>Agustín Ferrari</h2>
      <img src="./images/agustin.jpg" alt="Foto de Agustin" className="perfil-imagen" />
      <h3>Habilidades en programación:</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
        <li>Git & GitHub</li>
      </ul>
      <h3>Proyectos:</h3>
      <ul>
        <li>Dashboard de Ventas con React</li>
        <li>Landing Page para Startup de Tecnología</li>
        <li>Gestor de Tareas con Firebase</li>
      </ul>
      <h3>Tecnologías:</h3>
      <div className="iconos-tecnologias">
        <FaHtml5 />
        <FaCss3Alt />
        <FaJs />
        <FaReact />
        <FaNodeJs />
        <FaGit />
      </div>
    </div>
  );
};

export default Agustin;
