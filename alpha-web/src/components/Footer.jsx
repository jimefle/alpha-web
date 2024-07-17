import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
export default function Footer(){
    return(
        <section>
            <footer className="footer">
                <div className="footer-section">
                    <h3>Empresa</h3>
                    <ul>
                    <li>Quiénes somos</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Servicios</h3>
                    <ul>
                    <li>Staff Augmentation</li>
                    <li>AI Project Development</li>
                    <li>IoT Project Development</li>
                    <li>Web Apps Development</li>
                    <li>Mobile Apps Development</li>
                    <li>Salesforce</li>
                    <li>Data Migration & Integration</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Productos</h3>
                    <ul>
                    <li>Staff Augmentation</li>
                    <li>AI Project Development</li>
                    <li>IoT Project Development</li>
                    <li>Web Apps Development</li>
                    <li>Mobile Apps Development</li>
                    <li>Salesforce</li>
                    <li>Data Migration & Integration</li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3>Contacto</h3>
                    <ul>
                        <li>
                            <a href="mailto:contacto@alphascope.com.ar">
                            <FontAwesomeIcon icon="fa-brands fa-instagram" /> contacto@alphascope.com.ar
                            </a></li>
                    </ul>
                </div>
            </footer>
            <section className="footer-footer">
                <img src="./src/image/logo-alpha.jpeg" className='logo-image' alt="Logo AlphaScope" />
                <div>
                    <a href="https://facebook.com/folderit" target="_blank" rel="noopener noreferrer" className='icons'>
                        <FontAwesomeIcon icon={faInstagram} /> 
                    </a>
                    <a href="https://www.linkedin.com/company/folderit" target="_blank" rel="noopener noreferrer" className='icons'>
                        <FontAwesomeIcon icon={faLinkedin} /> 
                    </a>
                    <a href="https://facebook.com/folderit" target="_blank" rel="noopener noreferrer" className='icons'>
                        <FontAwesomeIcon icon={faFacebook} /> 
                    </a>
                </div>
            </section>
        </section>
    )
}