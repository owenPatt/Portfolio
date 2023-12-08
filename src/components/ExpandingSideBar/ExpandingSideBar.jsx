import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./ExpandingSideBar.css";

const ExpandingSideBar = ({ isExpanded }) => {
  const [data, setData] = useState([]);
  const [showClass, setShowClass] = useState(-1);

  useEffect(() => {
    fetch("http://localhost/classes.php")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.error(error));
  }, []);

  const onCompletedChange = (event) => {
    const value = event.target.value;
    setShowClass(value);
  };

  const filteredData =
    showClass == -1 ? data : data.filter((item) => item.completed == showClass);

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>
      <div className="sidebar__content">
        <h2 className="sidebar__header">Classes Taken at Mott</h2>
        <div className="sidebar__search">
          <label className="sidebar__label" htmlFor="completedSelector">
            Show Completed:
          </label>
          <select
            className="sidebar__select"
            id="completedSelector"
            onChange={onCompletedChange}>
            <option value={-1}>All</option>
            <option value={1}>Completed</option>
            <option value={0}>Non-Completed</option>
          </select>
        </div>
        <table className="sidebar__table">
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item) => (
              <tr className="sidebar__table-row" key={item.ID}>
                <td className="sidebar__table-data">{item.classcode}</td>
                <td className="sidebar__table-data">{item.classname}</td>
                <td className="sidebar__table-data">
                  {item.completed == 1 ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

ExpandingSideBar.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

export default ExpandingSideBar;
