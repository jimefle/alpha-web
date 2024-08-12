import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '/src/styles/Carousel.css';

const ImageCarousel = () => {
  return (
    <Carousel
      autoPlay
      interval={4000} // Intervalo en milisegundos
      infiniteLoop
      showThumbs={false}
      showStatus={false}
      centerMode
      centerSlidePercentage={70}
    >
      <div  className="carousel-image">
        <img src="./src/image/carousel1.jpg" alt="Imagen 1" />
        <div className="contenedor">
          <h2 className="carousel-text">Equipos médicos para veterinarios<span>&#160;</span></h2>
        </div>
      </div>
      <div className="carousel-image">
        <img src="./src/image/carousel2.jpg" alt="Imagen 2" />
        <div className="contenedor">
          <h2 className="carousel-text">Endoscopios industriales<span>&#160;</span></h2>
        </div>
      </div>
      <div className="carousel-image">
        <img src="./src/image/carousel3.jpg" alt="Imagen 3" />
        <div className="contenedor">
          <h2 className="carousel-text">Servicios profesionales para profesionales<span>&#160;</span></h2>
        </div>
      </div>
    </Carousel>
  );
};

export default ImageCarousel;
