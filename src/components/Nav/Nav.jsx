import logoWhite from "../../assets/logo-white.png";
import logoBlack from "../../assets/logo-black.png";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Nav.css";

const Nav = ({ darkMode, changeTheme }) => {
  // Component code here
  return (
    <nav className={`nav ${darkMode ? "" : "nav_light-mode"}`}>
      <img src={darkMode ? logoWhite : logoBlack} alt="logo" width={200} />
      <div className="nav__links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav__link nav__link_active" : "nav__link"
          }>
          Home
        </NavLink>
        <div
          className={`nav__line ${
            darkMode ? "" : "nav__line_light-mode"
          }`}></div>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "nav__link nav__link_active" : "nav__link"
          }>
          About
        </NavLink>
        <div
          className={`nav__line ${
            darkMode ? "" : "nav__line_light-mode"
          }`}></div>
        <NavLink
          to="/resume"
          className={({ isActive }) =>
            isActive ? "nav__link nav__link_active" : "nav__link"
          }>
          Resume
        </NavLink>
        <div
          className={`nav__line ${
            darkMode ? "" : "nav__line_light-mode"
          }`}></div>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "nav__link nav__link_active" : "nav__link"
          }>
          Projects
        </NavLink>
      </div>
      <DarkModeSwitch onToggle={changeTheme}></DarkModeSwitch>
    </nav>
  );
};

Nav.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

export default Nav;
