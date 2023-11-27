import "./Switch.css";

const Switch = () => {
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

export default Switch;
