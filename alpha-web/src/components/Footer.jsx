import '/src/styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
export default function Footer(){
    return(
            <section className="footer">
                <section className="social-media">
                    <h5 className="text-social-media">
                        Seguinos en nuestras redes sociales
                    </h5>
                    <div className='icons-section'>
                        <a href="https://instagram.com/alphascope" target="_blank" rel="noopener noreferrer" className='icons'>
                            <FontAwesomeIcon icon={faInstagram} /> 
                        </a>
                        <a href="https://facebook.com/alphascope" target="_blank" rel="noopener noreferrer" className='icons'>
                            <FontAwesomeIcon icon={faFacebook} /> 
                        </a>
                    </div>
                </section>
                <section className="alpha-info">   
                    <div className='info'>
                        <a>
                            <FontAwesomeIcon icon={faLocationDot} className='contact-line' />
                            Antonio Crespo 1609, Paraná, Entre Rios, <strong>Argentina</strong>
                        </a>
                    </div>
                    <div className='info'>
                        <FontAwesomeIcon icon={faWhatsapp} className='contact-line'/>
                        <a href="https://wa.me/543435726481" target="_blank">+54 9 343 5 726481</a>
                    </div>
                    <div className='info'>
                        <FontAwesomeIcon icon={faEnvelope} className='contact-line' />
                        <a href="mailto:contacto@alphascope.com.ar" >contacto@alphascope.com.ar</a>
                    </div>
                </section>
                
                
            </section>

    )
}