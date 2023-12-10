import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropTypes from "prop-types";

const Carousel = ({ data }) => {
  const settings = {
    infinite: true,
    speed: 100,
    slidesToShow: 3,
    slidesToScroll: 1,
    draggable: true,
    swipeToSlide: true,
  };

  return (
    <div className="carousel">
      <Slider {...settings}>
        {data.map((item) => (
          <div className="carousel__item" key={item.id}>
            <h1 className="carousel__item-title">{item.name}</h1>
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
