// Import necessary dependencies and assets
import "./Home.css"; // Import the CSS for this component
import selfImage from "../../assets/self-image.png"; // Import the image to be used

// Define the Home component
const Home = () => {
  return (
    <div className="home">
      <div className="home__header">
        <h1 className="home__title">Owen Patterson</h1>
        <h2 className="home__subtitle">Software Developer</h2>
        <img className="home__image" src={selfImage} alt="Bitmoji of Owen" />
      </div>
    </div>
  );
};

export default Home;
