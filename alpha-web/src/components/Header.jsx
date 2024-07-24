import '/src/styles/Header.css'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const location = useLocation();
  const getLinkClass = (path) =>{
    return location.pathname === path ? 'header-links active' : 'header-links';
  }
    return(
      <div>
        
        <header>
          <img src="./src/image/logo-alpha.jpeg" className='logo-image' alt="Logo AlphaScope" />
          <div className='nav-links'>
            <Link to="/" className={getLinkClass("/")}>Inicio</Link>
            <Link to="/products" className={getLinkClass("/products")}>Productos</Link>
            <Link to="/services" className={getLinkClass("/services")}>Servicios</Link>
            <Link to="/blog" className={getLinkClass("/blog")}>Blog</Link>
            <Link to="/about-us" className={getLinkClass("/about-us")}>Empresa</Link>
            <Link to="/contact" className={getLinkClass("/contact")}>Contacto</Link>
          </div>
      </header>

      </div>
    )
}

export default Header;