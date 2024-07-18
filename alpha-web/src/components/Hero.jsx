import '/src/styles/Hero.css'

export default function Hero() {
    return (
        <section>
            <section className='main-section'>
                <h1>ALPHASCOPE</h1>
                <p>SOMOS ESPECIALISTAS EN ENDOSCOPIA VETERINARIA E INDUSTRIAL.</p>
                <p>Comercializamos equipos médicos para uso veterinario. Entendemos la importancia para los profesionales veterinarios de contar
                    con equipos confiables para obtener los mejores resultados que les permitan realizar su trabajo enfocándose en sus pacientes, 
                    delegando en nosotros la atención de sus equipos e instrumental de trabajo. 
                    En el rubro industrial, proveemos equipos como boroscopios y cámaras de inspección de tuberías, satisfaciendo una amplia gama 
                    de necesidades en el ámbito de las inspecciones técnicas no destructivas. 
                </p>
            </section>
            <section className="card-section">
                <article>
                    <h2>Empresa</h2>
                    <h3> ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h3>
                    <a href="#" className="cta">
                        <span>Ver más</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </a>
                </article>
                <article>
                    <h2>Servicios</h2>
                    <h3> ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h3>
                    <a href="#" className="cta">
                        <span>Ver más</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </a>
                </article>
                <article>
                    <h2>Productos</h2>
                    <h3> ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</h3>
                    <a href="#" className="cta">
                        <span>Ver más</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </a>
                </article>
            </section>
        </section>
    )
}