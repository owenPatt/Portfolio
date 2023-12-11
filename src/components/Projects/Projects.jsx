// Imports
import "./Projects.css";
import projects from "../../utils/constants/projects";
import Carousel from "../Carousel/Carousel";

// Define the Projects component
const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects__title">Projects</h1>
      {/* Render the Carousel component with the projects data */}
      <Carousel data={projects}></Carousel>{" "}
    </div>
  );
};

export default Projects;
