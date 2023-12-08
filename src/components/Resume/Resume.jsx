import { useState } from "react";
import "./Resume.css";
import downloadPDF from "../../utils/download/download";
import ExpandingSideBar from "../ExpandingSideBar/ExpandingSideBar";

const Resume = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const hideSidebar = (e) => {
    if (
      e.target.className !== "resume__button resume__button_small" &&
      e.target.className !== "sidebar expanded"
    ) {
      setIsExpanded(false);
      document.removeEventListener("click", hideSidebar);
    }
  };

  const showSidebar = () => {
    document.addEventListener("click", hideSidebar);
    setIsExpanded(true);
  };

  const email = "owen.patt.8@gmail.com";
  return (
    <div className="resume">
      <div className="resume__header">
        <button
          className="resume__button resume__button_download-button"
          onClick={downloadPDF}>
          Download
        </button>
        <h2 className="resume__title">Resume</h2>
      </div>
      <section className="resume__section">
        <h3 className="resume__subtitle">Owen Patterson</h3>
        <p className="resume__text">
          <a className="resume__link" href="https://github.com/owenPatt">
            Github
          </a>{" "}
          |{" "}
          <a className="resume__link" href={`mailto:${email}`}>
            {email}
          </a>{" "}
          | Michigan (open to relocate, remote work)
        </p>
      </section>
      <section className="resume__section">
        <h3 className="resume__subtitle">Summary</h3>
        <p className="resume__text">
          Full stack web developer with a passion for creating user-friendly
          applications with experience in web development, project management,
          and mobile development. Background in Computer Science and IT
          management.
        </p>
      </section>
      <section className="resume__section">
        <h3 className="resume__subtitle">Technical Skills</h3>
        <p className="resume__text">
          HTML/CSS, JavaScript, React, Node.js, Express, MongoDB, SQL, noSQL,
          Git, C#, Python, C++, Visual Studio, Windows, Linux, .NET, cloud
          providers (AWS)
        </p>
      </section>
      <section className="resume__section">
        <h3 className="resume__subtitle">Technical Projects</h3>
        <div className="resume__tech-project">
          <p className="resume__text resume__text_left">
            WTWR (What to Wear?) -{" "}
            <a
              className="resume__link"
              href="https://github.com/owenPatt/se_project_react">
              Github
            </a>{" "}
            |{" "}
            <a
              className="resume__link"
              href="https://owenpatt.github.io/se_project_react/">
              Pages
            </a>{" "}
            |{" "}
            <a className="resume__link" href="https://openweathermap.org/">
              API
            </a>{" "}
            | React, JavaScript, HTML/CSS, OpenWeatherMap API | 2023
          </p>
          <ul className="resume__list">
            <li className="resume__list-item">
              Uses React to create a single page application, which looks and
              feels nice to use.
            </li>
            <li className="resume__list-item">
              Uses OpenWeatherMap API to get weather data for a given location.
              The weather also changes the image and color of the banner.
            </li>
            <li className="resume__list-item">
              Next step is integrating user log in to allow for personalization
              and saving of location/cards.
            </li>
          </ul>
        </div>
        <div className="resume__tech-project">
          <p className="resume__text resume__text_left">
            SirGrungle The Bot -{" "}
            <a
              className="resume__link"
              href="https://github.com/owenPatt/SirGrungleBot">
              Github
            </a>{" "}
            | Node.js, JavaScript, Discord API | 2021
          </p>
          <ul className="resume__list">
            <li className="resume__list-item">
              Uses built-in API provided by Discord which allows the bot to
              connect to a live discord server.
            </li>
            <li className="resume__list-item">
              Easy to use built in functions that help run DND sessions.
            </li>
            <li className="resume__list-item">
              This was used as an experiment to see the capabilities of the
              Discord API, which seemed to be very robust in terms of what you
              can do.
            </li>
          </ul>
        </div>
        <div className="resume__tech-project">
          <p className="resume__text resume__text_left">
            Pathfinder Character Creator -{" "}
            <a
              className="resume__link"
              href="https://github.com/owenPatt/Pathfinder-character-creater">
              Github
            </a>{" "}
            | C# and .NET Framework | 2023
          </p>
          <ul className="resume__list">
            <li className="resume__list-item">
              Build in Visual Studios using the C# language and .NET framework.
            </li>
            <li className="resume__list-item">
              Information is stored in a SQL database locally, which is then
              displayed and edited in the application.
            </li>
            <li className="resume__list-item">
              This was a project for a class, which was a great learning
              experience in terms of working with C# and .NET.
            </li>
          </ul>
        </div>
        <div className="resume__tech-project">
          <p className="resume__text resume__text_left">
            Portfolio -{" "}
            <a
              className="resume__link"
              href="https://github.com/owenPatt/Portfolio">
              Github
            </a>{" "}
            | React.js, Vite | 2023
          </p>
          <ul className="resume__list">
            <li className="resume__list-item">
              Build with React.js which allows it to run as a single JavaScript
              web application.
            </li>
            <li className="resume__list-item">
              Used Vite to quickly create the baseline file structure and main
              file layout.
            </li>
            <li className="resume__list-item">
              Completely self-built with the intent to create a super nice user
              experience.
            </li>
          </ul>
        </div>
      </section>
      <section className="resume__section">
        <h3 className="resume__subtitle">Experience</h3>
        <div className="resume__career-outline">
          <p className="resume__text resume__text_left">
            Application Analyst 1 - 2023 to Present | Hurley Medical Center
          </p>
          <ul className="resume__list">
            <li className="resume__list-item">
              Provide technical support to hospital staff, including doctors,
              nurses, and other medical professionals.
            </li>
            <li className="resume__list-item">
              Troubleshoot and resolve issues with hardware and software.
            </li>
            <li className="resume__list-item">
              Work with vendors to resolve issues with medical equipment.
            </li>
          </ul>
        </div>
        <div className="resume__career-outline">
          <p className="resume__text resume__text_left">
            Technical Support Specialist 1 - 2023 | Hurley Medical Center
          </p>
          <ul className="resume__list">
            <li className="resume__list-item">
              Provide technical support to hospital staff, including doctors,
              nurses, and other medical professionals.
            </li>
            <li className="resume__list-item">
              Troubleshoot and resolve issues with hardware and software.
            </li>
            <li className="resume__list-item">
              Work with vendors to resolve issues with medical equipment.
            </li>
          </ul>
        </div>
        <div className="resume__career-outline">
          <p className="resume__text resume__text_left">
            Service Center Analyst - 2021 to 2023 | Hurley Medical Center
          </p>
          <ul className="resume__list">
            <li className="resume__list-item">
              Answered calls from hospital staff, including doctors, nurses, and
              other medical professionals.
            </li>
            <li className="resume__list-item">
              Troubleshoot and resolve basic issues with hardware and software.
            </li>
            <li className="resume__list-item">
              Escalate issues to the appropriate team when needed.
            </li>
          </ul>
        </div>
      </section>
      <section className="resume__section">
        <h3 className="resume__subtitle">Education</h3>
        <div className="resume__education-outline">
          <p className="resume__text">
            TripleTen Coding Bootcamp - 2023 to Present
          </p>
        </div>
        <div className="resume__education-outline">
          <p className="resume__text resume__text_no-margin">
            Associates in Computer Information Systems - 2021 to Present | Mott
            Community College - Flint, MI
          </p>
          <button
            className="resume__button resume__button_small"
            onClick={showSidebar}>
            View Classes
          </button>
        </div>
      </section>
      <ExpandingSideBar isExpanded={isExpanded}></ExpandingSideBar>
    </div>
  );
};

export default Resume;
