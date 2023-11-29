import "./Resume.css";

const Resume = () => {
  const email = "owen.patt.8@gmail.com";
  return (
    <div className="resume">
      <h2 className="resume__title">Resume</h2>
      {/* Add your resume content here */}
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
          <p className="resume__text resume__text_left">
            A React application that displays the weather forecast for a given
            location and provides clothing recommendations based on the weather,
            which it gets through OpenWeatherMap API.
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
              Next steps is intergrating user log in to allow for
              personalization and saving of location/cards.
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
            | Node.js, JavaScript, Discord API | 2023
          </p>
          <p className="resume__text resume__text_left"></p>
          <ul className="resume__list">
            <li className="resume__list-item"></li>
            <li className="resume__list-item"></li>
            <li className="resume__list-item"></li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Resume;
