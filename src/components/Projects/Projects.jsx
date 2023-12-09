import "./Projects.css";
import projects from "../../utils/constants/projects";
import Carousel from "../Carousel/Carousel";

const Projects = () => {
  return (
    <div className="projects">
      <h1 className="projects__title">Projects</h1>
      <Carousel data={projects}></Carousel>
    </div>
  );
};

export default Projects;
