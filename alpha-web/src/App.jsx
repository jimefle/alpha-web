import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <ScrollToTop />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="services" element={<Services />} />
                    <Route path="about-us" element={<AboutUs />} />
                </Routes>   
            <Footer />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
                <a href="https://api.whatsapp.com/send?phone=51955081075&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Varela%202." className="float" target="_blank">
                    <i className="fa fa-whatsapp my-float"></i>
                </a>
        </div>
    );
  }

export default App