import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import Carousel from './components/Carousel'
import Hero from './components/hero';
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <html>
      <body>
        <Header></Header>
      <main>
        <nav> 
          <FontAwesomeIcon icon={faEnvelope} />
          <a href="" className='contact-line'>contacto@alphascope.com.ar</a>
          <FontAwesomeIcon icon={faWhatsapp} />
          <a href="" className='contact-line'>+54 343 5 093106</a>
          <FontAwesomeIcon icon={faWhatsapp} />
          <a href="" className='contact-line'>+54 343 4 341791</a>
        </nav>
        <Carousel />
        <Hero />
      </main>
      <footer>
        <Footer />
      </footer>
    </body>
    </html>
    
  )
}

export default App
