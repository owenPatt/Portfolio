import "./Home.css";
import selfImage from "../../assets/self-image.png";

const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">Owen Patterson</h1>
        <h2 className="home__subtitle">React.js Developer</h2>
        <img className="home__image" src={selfImage} alt="Bitmoji of Owen" />
      </div>
    </div>
  );
};

export default Home;
