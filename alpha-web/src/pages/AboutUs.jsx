import '../styles/AboutUs.css'
import Article from '../components/Article'

const AboutUs = () => {
    return(
        <section className='aboutus-page'>
            <Article title="Quiénes somos"
                text={"SOMOS ESPECIALISTAS EN ENDOSCOPIA VETERINARIA E INDUSTRIAL.Comercializamos equipos médicos para uso veterinario. Entendemos la importancia para los profesionales veterinarios de contar con equipos confiables para obtener los mejores resultados que les permitan realizar su trabajo enfocándose en sus pacientes, delegando en nosotros la atención de sus equipos e instrumental de trabajo. En el rubro industrial, proveemos equipos como boroscopios y cámaras de inspección de tuberías, satisfaciendo una amplia gama de necesidades en el ámbito de las inspecciones técnicas no destructivas."}
                image="./src/image/aboutus.jpeg"
            />
            <section className="mv-section">
                <section className='mv-card'>
                    <h2>Visión</h2>
                    <h5>Convertirnos en referentes en el mercado de los equipos médicos veterinarios y en el área de la endoscopia 
                        industrial, ofreciendo productos y servicios de calidad y al mejor precio. </h5>
                </section>
                <section className='mv-card'>
                    <h2>Misión</h2>
                    <h5>Proveer a los profesionales de los equipos necesarios que les permitan realizar su trabajo de forma eficiente, 
                        con equipamiento de vanguardia y asequibles, cuidando todo el proceso de adquisición de sus equipos sabiendo que 
                        en todo momento cuentan con el apoyo técnico necesario.</h5>
                </section>
            </section>
        </section>
    )
}

export default AboutUs