import '/src/styles/Hero.css'
import { Link } from 'react-router-dom'
export default function Hero() {
    return (
        <section>
            <section className='main-section'>
                <h1>ALPHASCOPE</h1>
                <h5>SOMOS ESPECIALISTAS EN ENDOSCOPIA VETERINARIA E INDUSTRIAL</h5>
                <p>Comercializamos equipos médicos para uso veterinario. Entendemos la importancia para los profesionales veterinarios de contar
                    con equipos confiables para obtener los mejores resultados que les permitan realizar su trabajo enfocándose en sus pacientes, 
                    delegando en nosotros la atención de sus equipos e instrumental de trabajo. 
                    En el rubro industrial, proveemos equipos como boroscopios y cámaras de inspección de tuberías, satisfaciendo una amplia gama 
                    de necesidades en el ámbito de las inspecciones técnicas no destructivas. 
                </p>
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