import '../styles/AboutUs.css'
const AboutUs = () => {
    return(
        <section className='aboutus-page'>
                <section className='about-info'>
                    <h1>ALPHASCOPE</h1>
                    <p className='text-about'>SOMOS ESPECIALISTAS EN ENDOSCOPIA VETERINARIA E INDUSTRIAL.</p>
                    <p className='text-about'>Comercializamos equipos médicos para uso veterinario. Entendemos la importancia para los profesionales veterinarios de contar
                        con equipos confiables para obtener los mejores resultados que les permitan realizar su trabajo enfocándose en sus pacientes, 
                        delegando en nosotros la atención de sus equipos e instrumental de trabajo. 
                        En el rubro industrial, proveemos equipos como boroscopios y cámaras de inspección de tuberías, satisfaciendo una amplia gama 
                        de necesidades en el ámbito de las inspecciones técnicas no destructivas. 
                    </p>
                    <p className='text-about'>Nuestros proveedores son fabricantes lo que nos permite ofrecer mejores precios. </p>
                </section>
                <section className='about-img'>
                    <img src="./src/image/aboutus.jpeg" alt="Imagen Plano" className='imagen-plano'/>
                </section>
                <section className="mv-section">
                    <article className='mv-card'>
                        <h2>Visión</h2>
                        <h3>Comercializamos equipos médicos para uso veterinario. Entendemos la importancia para los profesionales veterinarios de contar
                        con equipos confiables para obtener los mejores resultados que les permitan realizar su trabajo enfocándose en sus pacientes, 
                        delegando en nosotros la atención de sus equipos e instrumental de trabajo.</h3>
                    </article>
                    <article className='mv-card'>
                        <h2>Misión</h2>
                        <h3>Comercializamos equipos médicos para uso veterinario. Entendemos la importancia para los profesionales veterinarios de contar
                        con equipos confiables para obtener los mejores resultados que les permitan realizar su trabajo enfocándose en sus pacientes, 
                        delegando en nosotros la atención de sus equipos e instrumental de trabajo.</h3>
                    </article>
                </section>
        </section>
    )
}

export default AboutUs