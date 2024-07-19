import '../App.css';
import '/src/styles/Contact.css';

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
                <h5>Correo: </h5>
                <h5>Redes sociales</h5>
            </section>
        </div>
    )
}

export default Contact