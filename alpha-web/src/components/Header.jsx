import '/src/styles/Header.css'

const Header = () => {
    return(
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
    )
}

export default Header;