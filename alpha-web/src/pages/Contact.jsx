import '../App.css';
import '/src/styles/Contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp} from '@fortawesome/free-brands-svg-icons';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mldrgoqa");

  if (state.succeeded) {
      return <p>Mensaje enviado!</p>;
  }

  return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="name">Nombre</label>
            <input
                id="name"
                type="text" 
                name="name"
                required
                maxLength={50}
                placeholder='Nombre'
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email@ejemplo.com"
                className="input"
            />
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
                className="validation-error"
            />

            <label htmlFor="message">Mensaje</label>
            <textarea
                id="message"
                name="message"
                required
                placeholder="Escribe tu mensaje"
                className="textarea"
            />
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
                className="validation-error"
            />

            <button type="submit" disabled={state.submitting} className="button">Enviar</button>
        </form>
  );
}

const Contact = () => {
    return(
        <div className="contact-page">
            <section className="user-info">
                <ContactForm ></ContactForm>
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