import React from "react";
import "/styles/Perfil.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from "react-icons/fa";

const Flavio = () => {
  return (
    <div className="perfil-container">
      <h2>Flavio Benítez</h2>
      <img src="./images/flavio.jpg" alt="Foto de Flavio" className="perfil-imagen" />
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
        <li>Panel de Control para Admin</li>
        <li>Red Social básica con MongoDB</li>
        <li>Simulador de Finanzas Personales</li>
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

export default Flavio;
