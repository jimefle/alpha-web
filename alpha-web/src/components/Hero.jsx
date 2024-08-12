import '/src/styles/Hero.css'
import Article from '../components/Article'

export default function Hero() {

    return (
        <section>
            <section className='main-section'>
                <Article
                    title=""
                    text={
                        "Somos especialistas en endoscopía veterinaria e industrial/nEntendemos la importancia para los profesionales veterinarios de contar con equipos confiables para obtener los mejores resultados que les permitan realizar su trabajo enfocándose en sus pacientes, delegando en nosotros la atención de sus equipos e instrumental de trabajo./nEn el rubro industrial, proveemos equipos como boroscopios y cámaras de inspección de tuberías, satisfaciendo una amplia gama de necesidades en el ámbito de las inspecciones técnicas no destructivas."
                    }
                    image=""
                    imagePosition="right"
                />
                <Article
                    title=""
                    text={
                        "Asesoría y reparación especializada a tu alcance/nContamos con un departamento técnico para responder sus consultas ya sea al momento de decidir la compra como durante el periodo post-venta./nContamos con profesionales con experiencia en la reparación de equipos médicos lo que nos permite ofrecer un servicio técnico completo, que incluye asistencia técnica inmediata, reparación del equipo y provisión de repuestos de todos los equipos que vendemos."
                    }
                    image={"./src/image/service.jpg"}
                    imagePosition="left"
                    path={'contact'}
                    btnText={"CONSULTANOS PARA MÁS INFORMACIÓN"}
                />
                <Article
                    title=""
                    text={
                        "Venta de productos/nNos dedicamos a la venta de equipos médicos para uso veterinario, especialmente endoscopios tanto veterinarios como industriales. Ofrecemos asesoramiento en la compra de equipos de endoscopia para uso en medicina humana."
                    }
                    image={"./src/image/hero3.png"}
                    imagePosition="right"
                    path={'products'}
                    btnText={"VER PRODUCTOS"}
                />
            </section>
            <div className="card-section">
                    <article className='card'>
                            <h3>Visión</h3>
                            <h6>Convertirnos en referentes en el mercado de los equipos médicos veterinarios y en el área de la endoscopia industrial, ofreciendo productos y servicios de calidad y al mejor precio.</h6>
                    </article>
                    <article className='card'>
                            <h3>Misión</h3>
                            <h6>Proveer a los profesionales de los equipos necesarios que les permitan realizar su trabajo de forma eficiente, con equipamiento de vanguardia y asequibles, cuidando todo el proceso de adquisición de sus equipos sabiendo que en todo momento cuentan con el apoyo técnico necesario.</h6>
                    </article>
                </div>
        </section>
    )
}

 