import '/src/styles/Header.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
    return(
      <div>
        
        <header>
          <img src="./src/image/logo-alpha.jpeg" className='logo-image' alt="Logo AlphaScope" />
          <div className='nav-links'>
            <Link to="/" className="header-links">Inicio</Link>
            <Link to="/products" className="header-links">Productos</Link>
            <Link to="/services" className="header-links">Servicios</Link>
            <Link to="/blog" className="header-links">Blog</Link>
            <Link to="/about-us" className="header-links">Empresa</Link>
            <Link to="/contact" className="header-links">Contacto</Link>
          </div>
      </header>
      <div>
        <nav className='contact-info'>
          <div>
            <FontAwesomeIcon icon={faEnvelope} />
            <a href="mailto:contacto@alphascope.com.ar" className='contact-line'>contacto@alphascope.com.ar</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faWhatsapp} />
            <a href="https://wa.me/543435093106" className='contact-line' target="_blank">+54 343 5 093106</a>
          </div>
          <div>
            <FontAwesomeIcon icon={faWhatsapp} />
            <a href="" className='contact-line' target="_blank">+54 343 4 341791</a>
          </div>
          </nav>
        </div>
      </div>
        
    )
}

export default Header;