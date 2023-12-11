// Imports
import "./Carousel.css";
import PropTypes from "prop-types";

// React Slider library dependencies
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = ({ data }) => {
  // Define the settings for the Slider component
  const settings = {
    infinite: true, // Enable infinite scrolling
    speed: 500, // Set the transition speed to 500ms
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    draggable: true, // Allow the slides to be dragged
    centerMode: true, // Enable center mode
    centerPadding: "300px", // Set the padding around the centered slide
    swipeToSlide: true, // Allow swiping to slide instead of change the slide
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {data.map((item) => (
          <div className="carousel__item" key={item.id}>
            <a className="carousel__item-title" href={item.githubLink}>
              {item.name}
            </a>
            <p className="carousel__item-description">{item.description}</p>
            <img
              className="carousel__item-image"
              src={item.imageSrc}
              alt={item.name}
            />
            <h2 className="carousel__item-takeaway-title">Takeaway:</h2>
            <p className="carousel__item-takeaway">{item.takeAway}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
    })
  ),
};

export default Carousel;
