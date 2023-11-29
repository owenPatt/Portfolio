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
        </p>
      </section>
    </div>
  );
};

export default Resume;
