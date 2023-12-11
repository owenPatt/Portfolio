// Imports
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./ExpandingSideBar.css";

const ExpandingSideBar = ({ isExpanded }) => {
  // Use React's useState hook to manage the state of the data and showClass
  const [data, setData] = useState([]);
  const [showClass, setShowClass] = useState(-1);

  // Use React's useEffect hook to fetch data when the component mounts
  useEffect(() => {
    fetch(
      "https://www.mottwebdev.com/student_files/opatterson/comw282/portfolio/classes.php"
    )
      .then((response) => response.json()) // Parse the response as JSON
      .then((data) => {
        setData(data); // Update the state with the fetched data
      })
      .catch((error) => console.error(error)); // Log any errors
  }, []);

  // Define a function to handle changes to the completed selector
  const onCompletedChange = (event) => {
    const value = event.target.value;
    setShowClass(value); // Update the state with the new value
  };

  // Filter the data based on the value of showClass
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

// Define the prop types for the ExpandingSideBar component
ExpandingSideBar.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

// Export the ExpandingSideBar component as the default export
export default ExpandingSideBar;
