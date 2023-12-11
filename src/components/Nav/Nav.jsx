// Import necessary dependencies and assets
import logoWhite from "../../assets/logo-white.png";
import logoBlack from "../../assets/logo-black.png";
import DarkModeSwitch from "../DarkModeSwitch/DarkModeSwitch";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import "./Nav.css";

// Define the Nav component
const Nav = ({ darkMode, changeTheme }) => {
  // Return the JSX to render for the Nav component
  return (
    <nav className={`nav ${darkMode ? "" : "nav_light-mode"}`}>
      <img src={darkMode ? logoWhite : logoBlack} alt="logo" width={200} />
      <div className="nav__links">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "nav__link nav__link_active" : "nav__link"
          }>
          {" "}
          {/* Apply a different class based on whether the link is active */}
          Home
        </NavLink>
        <div
          className={`nav__line ${
            darkMode ? "" : "nav__line_light-mode"
          }`}></div>{" "}
        {/* Apply a different class based on the darkMode prop */}
        {/* Repeat for each NavLink */}
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

// Define the prop types for the Nav component
Nav.propTypes = {
  darkMode: PropTypes.bool.isRequired,
  changeTheme: PropTypes.func.isRequired,
};

// Export the Nav component as the default export
export default Nav;
