import '/src/styles/Hero.css';

export default function Hero() {

    return (
        <section>
                <div className="text">
                    <h3>Nos presentamos…</h3>
                    <h5 className='parrafo'>Somos <strong>Alphascope</strong>, un grupo de profesionales multidisciplinario que nos dedicamos a la importación 
                        y comercialización de equipos médicos para veterinarios y equipos para la industria. 
                    </h5>
                </div>
                <div className="text-r">
                    <h3>Nos especializamos en endoscopia veterinaria e industrial</h3>
                    <h5 className='parrafo'>Entendemos la importancia para los profesionales veterinarios de contar con equipos confiables 
                        para obtener los mejores resultados que les permitan realizar su trabajo enfocándose en sus pacientes,
                         delegando en nosotros la atención de sus equipos e instrumental de trabajo.  
                    </h5>
                    <h5 className='parrafo'>En el rubro industrial, proveemos equipos como boroscopios y cámaras de inspección de tuberías, 
                        satisfaciendo una amplia gama de necesidades en el ámbito de las inspecciones técnicas no destructivas. 
                    </h5>
                </div>
                <div className="text">
                    <h3>Departamento técnico</h3>
                    <h5 className='parrafo'>Contamos con un departamento técnico para responder sus consultas durante todo el proceso de compra.
                         Ofrecemos servicio técnico post-venta. 

                    </h5>
                </div>
                <div className="text-r">
                    <h3>Nuestro objetivo</h3>
                    <h5 className='parrafo'>Proveer a los profesionales de equipos de vanguardia y asequibles, cuidando todo el proceso 
                        de adquisición de sus equipos sabiendo que en todo momento cuentan con el apoyo técnico necesario.
                    </h5>
                </div>      
                <section className='brands-carousel'>
                <div className="carousel-track">
                    <img src="./src/image/brands.jpg" alt="brands" className='carousel-image'/>
                    <img src="./src/image/brands.jpg" alt="brands" className='carousel-image'/>
                    <img src="./src/image/brands.jpg" alt="brands" className='carousel-image'/>
                </div>
            </section>  
        </section>
    )
}

 