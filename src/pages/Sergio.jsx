import React from "react";
import "/styles/Perfil.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGit } from "react-icons/fa";

const Sergio = () => {
  return (
    <div className="perfil-container">
      <h2>Sergio Godoy</h2>
      <img src="./images/sergio.jpg" alt="Foto de Sergio" className="perfil-imagen" />
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
        <li>Portfolio de Fotografía Web</li>
        <li>Calculadora Científica en JavaScript</li>
        <li>Chat en tiempo real con Socket.io</li>
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

export default Sergio;
