// Imports
import "./DarkModeSwitch.css";
import PropTypes from "prop-types";

const DarkModeSwitch = ({ onToggle }) => {
  return (
    <div className="switch">
      <input
        type="checkbox"
        id="switch-checkbox"
        className="switch__checkbox"
        onChange={onToggle}></input>
      <label htmlFor="switch-checkbox" className="switch__slider"></label>
    </div>
  );
};

// Define the prop types for the DarkModeSwitch component
DarkModeSwitch.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

// Export the DarkModeSwitch component as the default export
export default DarkModeSwitch;
