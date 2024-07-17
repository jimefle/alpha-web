import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import { Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="blog" element={<Blog />} />
                <Route path="services" element={<Services />} />
                <Route path="about-us" element={<AboutUs />} />
            </Routes>
            <Footer />
        </div>
    );
  }

export default App