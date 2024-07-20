import '../App.css';
import '/src/styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
const Contact = () => {
    return(
        <div className="contact-page">
            <section className="user-info">
                <form action="https://formspree.io/contacto@alphascope.com" method="POST">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required />
                    
                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" name="email" required />
                    
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" required></textarea>
                    
                    <button type="submit">Enviar</button>
                </form>
            </section>
            <section className="alpha-info">   
                <h1>Encontranos en</h1>
                <h5>Dirección: Antonio Crespo 1609, Paraná, Entre Rios, <strong>Argentina</strong></h5>
                <h5>Telefónos:</h5>
                <div>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <a href="https://wa.me/543435093106" className='contact-line' target="_blank"> +54 343 5 093106</a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faWhatsapp} />
                    <a href="" className='contact-line' target="_blank"> +54 343 4 341791</a>
                </div>
                <h5>Correo: 
                <a href="mailto:contacto@alphascope.com.ar" className='contact-line'> contacto@alphascope.com.ar</a>
                </h5>
                
                <h5>Redes sociales:</h5>
                <div>
                    <a href="https://instagram.com/alphascope" target="_blank" rel="noopener noreferrer" className='icons'>
                        <FontAwesomeIcon icon={faInstagram} /> 
                    </a>
                    <a href="https://www.linkedin.com/company/alphascope" target="_blank" rel="noopener noreferrer" className='icons'>
                        <FontAwesomeIcon icon={faLinkedin} /> 
                    </a>
                    <a href="https://facebook.com/alphascope" target="_blank" rel="noopener noreferrer" className='icons'>
                        <FontAwesomeIcon icon={faFacebook} /> 
                    </a>
                </div>
            </section>
        </div>
    )
}

export default Contact