import '/src/styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return(
        <header>
      
        <img src="./src/image/logo-alpha.jpeg" className='logo-image' alt="Logo AlphaScope" />
        <div>
          <Link to="/" className="header-links">Inicio</Link>
          <Link to="/products" className="header-links">Productos</Link>
          <Link to="/services" className="header-links">Servicios</Link>
          <Link to="/blog" className="header-links">Blog</Link>
          <Link to="/about-us" className="header-links">Empresa</Link>
          <button>Contacto</button>
        </div>
      </header>
    )
}

export default Header;