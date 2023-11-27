import "./Home.css";
import selfImage from "../../assets/self-image.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">
          Hello, I'm <span className="home__name">Owen Patterson</span>
        </h1>
        <h2 className="home__subtitle">React.js Developer</h2>
        <img className="home__image" src={selfImage} alt="Bitmoji of Owen" />
      </div>
      <div className="home__content">
        <div className="home__about">
          <h3 className="home__about-title">About Me</h3>
          <p className="home__about-text">
            I am a full-stack web developer with a passion for React.js. I am
            currently in school at Mott Community College, where I am learning a
            great foundation for programming. I am also a student at TripleTen,
            an online code learning platform. Through them I have gained an
            incredible amount of knowledge and experience with React.js,
            Node.js, Express, MongoDB, and more. I am currently working at
            Hurley Medical Center as a level 2 technician where I support old
            and push out new infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
