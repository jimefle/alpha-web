// src/ImageCarousel.jsx
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Carousel.css';

const ImageCarousel = () => {
  return (
    <Carousel
      autoPlay
      interval={4000} // Intervalo en milisegundos
      infiniteLoop
      showThumbs={false}
      showStatus={false}
    >
      <div  className="carousel-image">
        <img src="./src/image/carousel1.jpg" alt="Imagen 1" />
      </div>
      <div className="carousel-image">
        <img src="./src/image/carousel2.jpg" alt="Imagen 2" />
      </div>
      <div className="carousel-image">
        <img src="./src/image/carousel3.jpg" alt="Imagen 3" />
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
