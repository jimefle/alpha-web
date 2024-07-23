import '../App.css';
import '/src/styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
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
                <div>
                    <h5>
                        <FontAwesomeIcon icon={faLocationDot} className='contact-line' />
                        Antonio Crespo 1609, Paraná, Entre Rios, <strong>Argentina</strong>
                    </h5>
                </div>
                <div>
                    <FontAwesomeIcon icon={faWhatsapp} className='contact-line' />
                    <a href="https://wa.me/543435093106"  target="_blank">+54 343 5 093106</a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faWhatsapp} className='contact-line'/>
                    <a href="" target="_blank">+54 343 4 341791</a>
                </div>
                <div>
                    <FontAwesomeIcon icon={faEnvelope} className='contact-line' />
                    <a href="mailto:contacto@alphascope.com.ar" >contacto@alphascope.com.ar</a>
                </div>
            </section>
        </div>
    )
}

export default Contact