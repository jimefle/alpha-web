import '/src/styles/Hero.css'
import { Link } from 'react-router-dom'
import { useEffect, useRef } from 'react';

export default function Hero() {

    const UnderlinedHeader = () => {
        const h5Ref = useRef(null);
    
        useEffect(() => {
            const observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('show');
                    } else{
                        entry.target.classList.remove('show')
                    }
                },
                { threshold: 1 } // Ajusta el umbral según sea necesario
            );
    
            if (h5Ref.current) {
                observer.observe(h5Ref.current);
            }
    
            return () => {
                if (h5Ref.current) {
                    observer.unobserve(h5Ref.current);
                }
            };
        }, []);
    
        return <h5 ref={h5Ref} className="h5-underline">SOMOS ESPECIALISTAS EN ENDOSCOPIA VETERINARIA E INDUSTRIAL</h5>;
    };
    return (
        <section>
            <section className='main-section'>
                <h1>ALPHASCOPE</h1>
                <UnderlinedHeader />
            </section>
            <section className="card-section">
                <article>
                    <h3>Empresa</h3>
                    <h6> ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h6>
                    <Link to="/about-us" className="cta" preventScrollReset={false}>
                        <span>Ver más</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                </article>
                <article>
                    <h3>Servicios</h3>
                    <h6> ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h6>
                    <Link to="/services" className="cta">
                        <span>Ver más</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                </article>
                <article>
                    <h3>Productos</h3>
                    <h6> ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h6>
                    <Link to="/products" className="cta">
                        <span>Ver más</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link>
                </article>
            </section>
        </section>
    )
}