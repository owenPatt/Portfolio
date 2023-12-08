import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./ExpandingSideBar.css";

const ExpandingSideBar = ({ isExpanded }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost/classes.php")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className={`sidebar ${isExpanded ? "expanded" : ""}`}>
      <div className="sidebar__content">
        <table>
          <thead>
            <tr>
              <th>Code</th>
              <th>Name</th>
              <th>Completed</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.ID}>
                <td>{item.classcode}</td>
                <td>{item.classname}</td>
                <td>{item.completed === 1 ? "True" : "False"}</td>
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
