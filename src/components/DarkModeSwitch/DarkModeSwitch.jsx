import "./DarkModeSwitch.css";

const DarkModeSwitch = () => {
  return (
    <div className="switch">
      <input
        type="checkbox"
        id="switch-checkbox"
        className="switch__checkbox"></input>
      <label htmlFor="switch-checkbox" className="switch__slider"></label>
    </div>
  );
};

export default DarkModeSwitch;
