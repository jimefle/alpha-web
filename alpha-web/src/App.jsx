import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import Carousel from './components/Carousel'
import Hero from './components/Hero'
import Footer from './components/Footer'
function App() {

  return (
    <html>
      <body>
      <header>
        <img src="./src/image/logo-alpha.jpeg" className='logo-image' alt="Logo AlphaScope" />
        <div>
          <a href="" className='header-links'>Inicio</a>
          <a href="" className='header-links'>Productos</a>
          <a href="" className='header-links'>Servicios</a>
          <a href="" className='header-links'>Blog</a>
          <a href="" className='header-links'>Empresa</a>
          <button>Contacto</button>
        </div>
      </header>
      <main>
        <nav> 
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="" className='contact-line'>contacto@alphascope.com.ar</a>
          <FontAwesomeIcon icon={faWhatsapp} />
          <a href="" className='contact-line'>+54 343 5 093106</a>
          <FontAwesomeIcon icon={faWhatsapp} />
          <a href="" className='contact-line'>+54 343 4 341791</a>
        </nav>
        <Carousel></Carousel>
        <Hero></Hero>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </body>
    </html>
    
  )
}

export default App
