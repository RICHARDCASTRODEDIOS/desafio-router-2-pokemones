import { NavLink } from "react-router-dom";
import logo from "../assets/img/logo.svg";

const NavBar = () => {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : "inactive");
  
  return (
    <nav className="navbar">
      <div className="container">   
        <div className="navbar-brand" href="#home">
          <img style={{width:'60px', marginTop:'-18px'}} src={logo} alt="pokemon"/>
        </div>
        <div className="links">
          {/* lA PROPIEDAD 'end' EN NAVLINK PERMITE DESACTIVAR EL ENLACE EN LA RAIZ DEL PROYECYO(/) */}
          <NavLink end className={ setActiveClass } to="/"> Home </NavLink>
          <NavLink className={ setActiveClass } to="/pokemones"> Pokemones </NavLink>
        </div>
      </div>      
    </nav>
  )
}

export default NavBar;