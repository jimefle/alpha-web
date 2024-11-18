import '../App.css';
import '/src/styles/Contact.css';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  const [state, handleSubmit] = useForm("mldrgoqa");

  if (state.succeeded) {
    return <p className="success-message">¡Mensaje enviado con éxito!</p>;
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
                aria-label="Nombre completo"
            />
            <label htmlFor="email">Email</label>
            <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="Email@ejemplo.com"
                aria-label="Correo electrónico"
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
                aria-label="Tu mensaje"
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
        <section className="contact-section">
            <div className="contact-hello">
                <h1>Contactanos!</h1>
                <h5> Si tenes alguna pregunta o necesitas más información, 
                    estamos aquí para responder todas tus consultas.</h5>
                <img src="./src/image/contact-image.png" alt="world image" className='image'/>
            </div>
            <div className="user-info">
                <h2>Envianos un mensaje</h2>
                <ContactForm ></ContactForm>
            </div>
        </section>

    )
}

export default Contact