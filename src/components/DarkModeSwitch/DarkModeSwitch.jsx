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

DarkModeSwitch.propTypes = {
  onToggle: PropTypes.func.isRequired,
};

export default DarkModeSwitch;
