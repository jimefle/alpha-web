import '/src/styles/Hero.css'
import Article from '../components/Article'

export default function Hero() {

    return (
        <section>
            <section className='main-section'>
            <Article title=""
                text={"Somos especialistas en endoscopía veterinaria e industrial/nEntendemos la importancia para los profesionales veterinarios de contar con equipos confiables para obtener los mejores resultados que les permitan realizar su trabajo enfocándose en sus pacientes, delegando en nosotros la atención de sus equipos e instrumental de trabajo./nEn el rubro industrial, proveemos equipos como boroscopios y cámaras de inspección de tuberías, satisfaciendo una amplia gama de necesidades en el ámbito de las inspecciones técnicas no destructivas."}
                image="./src/image/alpha-image.jpg"
            />

            <Article title={"Servicios"}
                    text={"Asesoría y reparación especializada a tu alcance/nContamos con un departamento técnico para responder sus consultas ya sea al momento de decidir la compra como durante el periodo post-venta./nContamos con profesionales con experiencia en la reparación de equipos médicos lo que nos permite ofrecer un servicio técnico completo, que incluye asistencia técnica inmediata, reparación del equipo y provisión de repuestos de todos los equipos que vendemos."}
                    image={"./src/image/service.jpg"}/>

            <Article title={"Servicios"}
                    text={"Asesoría y reparación especializada a tu alcance/nContamos con un departamento técnico para responder sus consultas ya sea al momento de decidir la compra como durante el periodo post-venta./nContamos con profesionales con experiencia en la reparación de equipos médicos lo que nos permite ofrecer un servicio técnico completo, que incluye asistencia técnica inmediata, reparación del equipo y provisión de repuestos de todos los equipos que vendemos."}
                    image={"./src/image/service.jpg"}/>

            </section>

        

            <section className="card-section">
                <article className='card'>
                    <div className="card-front">
                        <h3>Visión</h3>
                    </div>
                    <div className="card-back">
                        <h6>Convertirnos en referentes en el mercado de los equipos médicos veterinarios y en el área de la endoscopia industrial, ofreciendo productos y servicios de calidad y al mejor precio.</h6>
                    </div>
                </article>
                <article className='card'>
                    <div className="card-front">
                        <h3>Misión</h3>
                    </div>
                    <div className="card-back">
                        <h6>Proveer a los profesionales de los equipos necesarios que les permitan realizar su trabajo de forma eficiente, con equipamiento de vanguardia y asequibles, cuidando todo el proceso de adquisición de sus equipos sabiendo que en todo momento cuentan con el apoyo técnico necesario.</h6>
                    </div>
                </article>
            </section>
        </section>
    )
}

/*
<Link to="/about-us" className="cta" preventScrollReset={false}>
                        <span>Ver más</span>
                        <svg width="13px" height="10px" viewBox="0 0 13 10">
                            <path d="M1,5 L11,5"></path>
                            <polyline points="8 1 12 5 8 9"></polyline>
                        </svg>
                    </Link> */