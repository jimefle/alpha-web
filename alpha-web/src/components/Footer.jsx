import '/src/styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';
export default function Footer(){
    return(
            <section className="footer">
                <img src="./src/image/logo-alpha.jpeg" className='logo-image' alt="Logo AlphaScope" />
                <div>
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