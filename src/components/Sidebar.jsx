import { Link } from 'react-router-dom';
import {
  FaHome,
  FaUser,
  FaCodeBranch,
  FaBook,
  FaCloudSun,
  FaFilm,
  FaArrowLeft
} from 'react-icons/fa';
import '/src/styles/Sidebar.css';

const Sidebar = () => {
  return (
    
    <div className="sidebar">
      <div className="logo-sidebar">
        <img src="/images/Logo.jpg" alt="Logo Grupo Dev Frontend" />
      </div>
      <nav>
        <ul>
          <li><FaHome /><Link to="/">Equipo</Link></li>
          <li><FaUser /><Link to="/flavio">Flavio Benítez</Link></li>
          <li><FaUser /><Link to="/agustin">Agustín Ferrari</Link></li>
          <li><FaUser /><Link to="/sergio">Sergio Godoy</Link></li>
          <li><FaFilm /><Link to="/peliculas">Películas</Link></li>
          <li><FaCodeBranch /><Link to="/proyectos">Proyectos</Link></li>
          <li><FaCloudSun /><Link to="/clima">Clima</Link></li>
          <li><FaBook /><Link to="/bitacora">Bitácora</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
