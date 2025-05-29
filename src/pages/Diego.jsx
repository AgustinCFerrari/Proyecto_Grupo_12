import React from "react";
import "/styles/Perfil.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from "react-icons/fa";

const Diego = () => {
  return (
    <div className="perfil-container">
      <h2>Diego Arias</h2>
      <img src="./images/diego.jpg" alt="Foto de Diego" className="perfil-imagen" />
      <h3 >Habilidades en programación:</h3>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML/CSS</li>
        <li>Node.js</li>
        <li>Git & GitHub</li>
      </ul>
      <h3>Proyectos:</h3>
      <ul>
        <li>Sistema de Reservas en Node.js</li>
        <li>E-commerce ficticio con React</li>
        <li>App de Clima con API externa</li>
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

export default Diego;
