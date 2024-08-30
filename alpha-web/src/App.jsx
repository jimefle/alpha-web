import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import { Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
    return (
        <div className='super-contenedor'>
            <Header />
            <ScrollToTop />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route path="blog" element={<Blog />} />
                    <Route path="contact" element={<Contact />} />
                </Routes> 
            </main>
            <Footer />
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" />
                <a href="https://api.whatsapp.com/send?phone=543435726481&text=Hola%21%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%..." className="float" target="_blank">
                    <i className="fa fa-whatsapp my-float"></i>
                </a>
        </div>
    );
  }

export default App