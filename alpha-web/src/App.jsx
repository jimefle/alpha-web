import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Carousel from './components/Carousel';
import Hero from './components/hero';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import { Routes, Route } from 'react-router-dom';


function App() {
    return (
      <div>
        <Header />
        <main>
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="blog" element={<Blog />} />
            <Route path="services" element={<Services />} />
            <Route path="about-us" element={<AboutUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    );
  }

export default App