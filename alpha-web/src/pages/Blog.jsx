import BlogCard from "../components/BlogCard"
import { useState } from "react";
import '../styles/Blog.css'

const blogs = [
    {
        id: 1,
        image: './src/image/blog2.jpg',
        title: 'El endoscopio en la industria',
        description: 'Se conoce con el nombre de endoscopio industrial o boroscopio a un instrumento de visión artificial para ver donde no llega la visión humana que consiste en una micro cámara de circuito cerrado de televisión que se introduce por un conducto o hueco oscuro y permite inspeccionar y grabar en vídeo el interior de redes de tuberías, máquinas o en construcciones.',
        content: `
                  <p>Formas de uso</p>
                  <ul>
                      <li>Se puede introducir rápidamente la sonda con cámara cctv por huecos pequeños y ver lo que hay detrás de paredes, paneles, cuadros, registros, etc.</li>
                      <li>Facilita la inspección bajo techo o suelo técnico, así como por encima de muros. Es ideal para comprobar el estado interior de conductos eléctricos o tuberías.</li>
                      <li>En el caso de instalaciones de maquinas como las de aire acondicionado es de gran ayuda para comprobar partes internas de los sistemas.</li>
                      <li>En trabajos técnicos es un gran aliado para comprobar el estado y la calidad de las construcciones terminadas.</li>
                      <li>Al ver donde la vista no llega es ideal para detectar problemas ocultos.</li>
                  </ul>
                  <p>Ventajas de uso</p>
                  <ul>
                      <li>Es un instrumento fácil de usar, tan solo introduce la sonda por el orificio o tubería y observa lo que se ve en pantalla.</li>
                      <li>Permite grabar y hacer fotografías para poder consultar con un tercero, mostrar al cliente o realizar un informe técnico.</li>
                      <li>Es la forma más rápida posible de realizar una inspección y para trabajos de mantenimiento.</li>
                      <li>Ayuda a que el operario trabaje de forma más confortable.</li>
                      <li>Permite alejar al operario de las fuentes de riesgos laborales (calor, partes móviles, productos irritantes…)</li>
                  </ul>
                  <p>El uso del endoscopio industrial está consolidado en sectores de la construcción, la arquitectura y la ingeniería civil desde hace unos años, sin embargo el avance tecnológico de componentes electrónicos y materiales hace que hoy en día dispongamos de equipos robustos y fiables de alta calidad  permitiendo así que el empleo de la técnica de la boroscopia se expanda rápidamente entre un gran número de profesionales de la construcción dedicados tanto a pequeñas intervenciones domésticas como a cualquier otro uso y dimensiones.</p>
                  `,
      },
      {
        id: 2,
        image: './src/image/carousel2.jpg',
        title: 'Cámara para inspección de tuberías',
        description: 'Las redes de alcantarillado requieren de un mantenimiento periódico para comprobar el estado de las tuberías de la misma. Una de las formas más seguras de examinar las cañerías y la única forma de hacerlo en el caso de las tuberías a las que el ser humano no puede acceder, es con una cámara de inspección de tuberías.',
        content: `
                <p>Una cámara para inspección de tuberías permite ver el interior de los conductos y  consta de tres elementos:</p>
                <ul>
                    <li>Cámara de inspección: es un cabezal resistente y sumergible donde se aloja una micro cámara de alta resolución e iluminación que se introduce en el interior de la tubería.</li>
                    <li>Cable guía: sirve para empujar la cámara por la tubería y llevar la señal capturada por la cámara a una unidad de control.</li>
                    <li>Unidad de control: controla los parámetros que permiten la visualización de las imágenes capturadas por la cámara, además de permitir la edición de textos y grabar video y audio (comentarios de voz).</li>
                </ul>
                <p>Las consideraciones a tener en cuenta al momento de elegir una cámara para inspección de tubería son:</p>
                <ul>
                    <li>Diámetro máximo y mínimo de los conductos a explorar. </li>
                    <li>Que sustancias o elementos hay dentro de la tubería ya sea agua, gas, cableado.</li>
                    <li>Cuantos metros se va a introducir el cabezal en la tubería. </li>
                    <li>Formas de transporte, resistencia a golpes o exposición al intemperie, según dónde va a ser utilizada. </li>
                </ul>
                <p>Las aplicaciones de estos equipos son muy diversas siendo útiles en trabajos de vigilancia, mantenimiento y para diagnosticar problemas. Con las cámaras de inspección de tuberías ya no es necesario desmontar para ver, ni abrir suelos o paredes para encontrar el problema en el conducto o en las tuberías.</p>
                <p>El uso de estos equipos tiene muchas ventajas como son grandes ahorros de tiempo, costos en mano de obra especializada, reducción del impacto sobre la estética de las instalaciones así como el polvo o ruido que va asociado a cualquier obra. Permiten llevar a cabo un mantenimiento preventivo para la detección temprana de los problemas antes de que estos se conviertan en graves resultando más caros y difíciles de resolver.  Posibilitan la detección exacta del fallo, incluso la localización de la profundidad. Incorpora un software completo que permite obtener resultados en tiempo real para tomar decisiones más rápido y almacenar información valiosa para un uso futuro. Son equipos fáciles de operar por lo que no requieren ningún entrenamiento especial para su uso.</p>
                `,
      },
      {
      id: 3,
      image: './src/image/blog1.jpg',
      title: 'Endoscopio en la medicina veterinaria',
      description: 'La endoscopia puede ser tan útil en medicina veterinaria como en la atención de la salud humana. Con mayor frecuencia, la endoscopia se usa como una herramienta de diagnóstico, pero también se puede usar para lo que se denomina "endoscopia intervencionista". Las razones comunes por las que los animales podrían beneficiarse de la endoscopia son muy similares a las razones por las que los humanos se benefician. La endoscopia permitirá una exploración visual de un área, además de proporcionar un medio para obtener una muestra o biopsia, sin los riesgos de una cirugía real. La amplia gama de tipos de endoscopia que se puede realizar en animales incluye endoscopia del tracto respiratorio, endoscopia del tracto gastrointestinal superior e inferior, endoscopia del tracto urinario y genital y endoscopia abdominal.',
      content: `
                <p>La endoscopia intervencionista generalmente combina el uso de equipos endoscópicos con fluoroscopia y / o ultrasonido, para realizar otros procedimientos, como la recuperación de cuerpos extraños, extracción de cálculos o pólipos, dilatación con globo de estenosis nasofaríngea y estenosis esofágicas, colocación de stent traqueal o uretral. En el caso de un animal que ingiere un objeto punzante o peligroso, se puede insertar un endoscopio a través de un tubo protector para recuperar el objeto sin temor a causar más daños durante la extracción.
                </p>
                <p>Una mascota sometida a un procedimiento endoscópico se colocará bajo anestesia general y no experimentará ninguna molestia. Esto puede o no requerir que se realicen pruebas para determinar si es seguro para la  mascota ser sedado. Es probable que el animal necesite ayunar durante 12 horas antes del procedimiento para asegurarse de que el estómago y el tracto intestinal estén vacíos de toda comida si se somete a una endoscopia gastrointestinal. Para una colonoscopia, se debe administrar medicación oral antes del procedimiento para eliminar la materia fecal del tracto intestinal. Para una exploración de ciertas áreas como la cavidad nasal, puede ser necesario determinar si el sangrado es un problema. En casi todos los casos, los procedimientos endoscópicos se realizan como procedimientos ambulatorios, y la mascota podrá regresar a casa el mismo día.
                </p>
                <p> Cada día se descubren nuevas innovaciones, y cada vez más prácticas veterinarias están adoptando el uso de endoscopia para mascotas, recibiendo asi atención de calidad con un menor riesgo de complicaciones, menos efectos secundarios y tiempos de curación más rápidos.
                </p>
                `,
    }
  ];
  
  const Blog = () => {
    const [expandedCardId, setExpandedCardId] = useState(null);

    const handleExpand = (id) => {
      setExpandedCardId(expandedCardId === id ? null : id);
    };
  
    return (
      <div className="blog-page">
        <h1 className="blog-header"></h1>
        <div className="blog-list">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              image={blog.image}
              title={blog.title}
              description={blog.description}
              content={blog.content}
              onExpand={() => handleExpand(blog.id)}
              isExpanded={expandedCardId === blog.id}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default Blog;