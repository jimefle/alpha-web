import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Carousel from '../components/Carousel';
import Hero from '../components/hero';
import '../App.css';


const Home = () => {
    return(
        <div>
          <nav>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:contacto@alphascope.com.ar" className='contact-line'>contacto@alphascope.com.ar</a>
            <FontAwesomeIcon icon={faWhatsapp} />
            <a href="https://wa.me/543435093106" className='contact-line'>+54 343 5 093106</a>
            <FontAwesomeIcon icon={faWhatsapp} />
            <a href="" className='contact-line'>+54 343 4 341791</a>
          </nav>
          <Carousel />
          <Hero />
        </div>
    )
}

export default Home