import '/src/styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
import {faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
export default function Footer(){
    return(
            <section className="footer">
                <img src="./src/image/logo-alpha.jpeg" className='logo-image' alt="Logo AlphaScope" />
                <section className="alpha-info">   
                    <div className='info'>
                        <h5>
                            <FontAwesomeIcon icon={faLocationDot} className='contact-line' />
                            Antonio Crespo 1609, Paraná, Entre Rios, <strong>Argentina</strong>
                        </h5>
                    </div>
                    <div className='info'>
                        <FontAwesomeIcon icon={faWhatsapp} className='contact-line' />
                        <a href="https://wa.me/543435093106"  target="_blank">+54 343 5 093106</a>
                    </div>
                    <div className='info'>
                        <FontAwesomeIcon icon={faWhatsapp} className='contact-line'/>
                        <a href="" target="_blank">+54 343 4 341791</a>
                    </div>
                    <div className='info'>
                        <FontAwesomeIcon icon={faEnvelope} className='contact-line' />
                        <a href="mailto:contacto@alphascope.com.ar" >contacto@alphascope.com.ar</a>
                    </div>
                </section>
                <div className='icons-section'>
                    <a href="https://instagram.com/alphascope" target="_blank" rel="noopener noreferrer" className='icons'>
                        <FontAwesomeIcon icon={faInstagram} /> 
                    </a>
                    <a href="https://facebook.com/alphascope" target="_blank" rel="noopener noreferrer" className='icons'>
                        <FontAwesomeIcon icon={faFacebook} /> 
                    </a>
                    <a href="https://www.linkedin.com/company/alphascope" target="_blank" rel="noopener noreferrer" className='icons'>
                    </a>
                </div>
                
            </section>

    )
}