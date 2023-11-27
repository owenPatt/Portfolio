import logo from "../../assets/logo-white.png";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = () => {
  return (
    <nav className="nav">
      <img src={logo} alt="logo" width={200} />
      <div className="nav__links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav__link nav__link_active" : "nav__link"
          }>
          Home
        </NavLink>
        <div className="nav__line"></div>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav__link nav__link_active" : "nav__link"
          }>
          About
        </NavLink>
        <div className="nav__line"></div>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive ? "nav__link nav__link_active" : "nav__link"
          }>
          Resume
        </NavLink>
        <div className="nav__line"></div>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "nav__link nav__link_active" : "nav__link"
          }>
          Projects
        </NavLink>
        <div className="nav__line"></div>
        <NavLink
          to="/degree-path"
          className={({ isActive }) =>
            isActive ? "nav__link nav__link_active" : "nav__link"
          }>
          Degree Path
        </NavLink>
      </div>
      <DarkModeSwitch></DarkModeSwitch>
    </nav>
  );
};

export default Nav;
