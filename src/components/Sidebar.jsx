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
import '/styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Desarrollo Web</h2>
      <nav>
        <ul>
          <li><FaHome /><Link to="/">Equipo</Link></li>
          <li><FaUser /><Link to="/diego">Diego Arias</Link></li>
          <li><FaUser /><Link to="/flavio">Flavio Benítez</Link></li>
          <li><FaUser /><Link to="/agustin">Agustín Ferrari</Link></li>
          <li><FaUser /><Link to="/sergio">Sergio Godoy</Link></li>
          <li><FaFilm /><Link to="/peliculas">Películas</Link></li>
          <li><FaCodeBranch /><Link to="/proyectos">Proyectos</Link></li>
          <li><FaCloudSun /><Link to="/clima">Clima</Link></li>
          <li><FaBook /><Link to="/bitacora">Bitácora</Link></li>
        </ul>
      </nav>
      <div className="volver">
        <FaArrowLeft /><Link to="/">Volver al Home</Link>
      </div>
    </div>
  );
};

export default Sidebar;
