import { useEffect, useState } from "react"
import Product from "../components/Product"
import '../styles/Products.css'
const Products = () => {
    const [activeSection, setActiveSection] = useState('veterinarios')

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('h2[id]');
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 100;
                const sectionBottom = sectionTop + section.offsetHeight;
                const scrollPosition = window.scrollY;

                if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const handleNavLinkClick = (sectionId) => {
        setActiveSection(sectionId);

        // Scroll suave a la sección correspondiente
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className='products-page'>
            <nav className="nav-products">
                <div
                    className={`nav-items ${activeSection === 'veterinarios' ? 'active' : ''}`}
                    onClick={() => handleNavLinkClick('veterinarios')}
                >
                    Veterinarios
                </div>
                <div
                    className={`nav-items ${activeSection === 'industriales' ? 'active' : ''}`}
                    onClick={() => handleNavLinkClick('industriales')}
                >
                    Industriales
                </div>
                <div
                    className={`nav-items ${activeSection === 'mobiliario' ? 'active' : ''}`}
                    onClick={() => handleNavLinkClick('mobiliario')}
                >
                    Mobiliario
                </div>
            </nav>

            <h2 id="veterinarios">Veterinarios</h2>
            <section className="products-display">
                <Product image={'./src/image/products/imagen4.jpg'} name={"Monitores multiparamétricos"}/>
                <Product image={'./src/image/products/imagen5.jpg'} name={"ECG"}/>
                <Product image={'./src/image/products/imagen5.1.jpg'} name={"Bombas de infusión"}/>
                <Product image={'./src/image/products/imagen6.png'} name={"Ecógrafos"}/>
                <Product image={'./src/image/products/imagen7.png'} name={"Rx"}/>
                <Product image={'./src/image/products/imagen8.jpg'} name={"Máquina de anestesia"}/>
                <Product image={'./src/image/products/imagen9.png'} name={"Endoscopios"}/>
                <Product image={'./src/image/products/imagen10.jpg'} name={"Estufas y autoclaves"}/>
            </section>

            <h2 id="industriales">Industriales</h2>
            <section className="products-display">
                <Product image={'./src/image/products/imagen11.jpg'} name={"Boroscopio"}/>
                <Product image={'./src/image/products/imagen12.jpg'} name={"Cámaras de inspección de tuberías"}/>
                <Product image={'./src/image/products/imagen12.1.jpg'} name={"Cámaras para inspecciones verticales"}/>
                <Product image={'./src/image/products/imagen13.jpg'} name={"Detectores"}/>
            </section>

            <h2 id="mobiliario">Mobiliario</h2>
            <section className="products-display">
                <Product image={'./src/image/products/imagen14.jpg'} name={"Carro de transporte para torre de endoscopia"}/>
                <Product image={'./src/image/products/imagen15.jpg'} name={"Mesa de exploración veterinaria"}/>
                <Product image={'./src/image/products/imagen16.jpg'} name={"Pie porta suero"}/>
            </section>

            <div className="contact-prod-section">
                <h2>Más información...</h2>
                <a href="mailto:contacto@alphascope.com.ar" className="cta">
                        <span>CONTACTO</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                </a>
            </div>
        </div>
        
    )
}

export default Products