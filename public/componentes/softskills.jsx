import styles from '../Estilos/estilos.css'
import Image from 'next/image';


export function SoftSkills () {

    return(
        <>
        <div className='soft_skills'>

        <div id='softskills' className='titulo'>    
        <h1 style={{color:'#495852'}} >
            &#x3C;Soft skills/&#x3E;
        </h1>
        </div>

        <div className='cuadricula_softskills'>

            <div className='card_softskills'>

                <div className='frente'>
                <div className='card_top'>
                <div className='contenedor_imagen'>
               <Image className='icono' height={75} width={75} src='/imagenes/problemas.png'/>
               </div>
                <h3> &#x3C;Resolucion de problemas/&#x3E;</h3>
                </div>
                <p>
                Tengo una habilidad sólida para analizar problemas complejos y desarrollar soluciones efectivas.
                </p>
                </div>

                <div className='atrassf'>
                    <p>
                    En mis proyectos, me encuentro frecuentemente con desafíos inesperados al utilizar nuevas bibliotecas y lenguajes. En estas situaciones, busco soluciones en la documentación oficial para comprender y resolver problemas específicos. Por ejemplo, al trabajar con React y React Native, enfrenté dificultades en la comunicación entre ellos y en la transferencia eficiente de datos. Mi enfoque proactivo en la investigación y la documentación ha sido clave para superar estos obstáculos y mejorar mi comprensión técnica.                   
                    </p>
                </div>

            </div>

            <div className='card_softskills'>
            <div className='card_top'>
            <div className='contenedor_imagen'>
            <Image className='icono' height={70} width={70} src='/imagenes/analitico.png'/>
            </div>
                <h3> &#x3C;Pensamiento analítico /&#x3E;</h3>
               </div>
                <p>
                Utilizo mi capacidad analítica para examinar datos, identificar patrones y tomar decisiones informadas.
                </p>

                <div className='atrassf'>
                    <p>
                    En un proyecto que involucraba la construcción de árboles de búsqueda binaria, enfrentamos el desafío de asignar tareas con el mismo valor en su índice. Optamos por una solución que no alterara la jerarquía general del árbol: agregamos un índice secundario en caso de que el valor principal fuera repetido. Esto garantizó que pudiéramos mantener la prioridad y el orden en el sistema sin afectar la estructura global del árbol.
                    </p>
                </div>

            </div>

            <div className='card_softskills'>
            <div className='card_top'>
            <div className='contenedor_imagen'>
            <Image className='icono' height={75} width={75} src='/imagenes/equipo.png'/>
            </div>
                <h3> &#x3C;Trabajo en equipo/&#x3E;</h3>
               </div>
                <p>
                Soy un colaborador efectivo, capaz de trabajar armoniosamente con diseñadores, desarrolladores y otros profesionales para lograr objetivos comunes.
                </p>

                <div className='atrassf'>
                    <p>
                    En todos los proyectos universitarios en los que he participado, he trabajado en equipo, lo que me ha permitido desarrollar habilidades para comunicar de manera asertiva y clara las necesidades y responsabilidades del grupo. Esta práctica ha contribuido a crear un ambiente de confianza en el equipo, fomentando una comunicación abierta entre todos los miembros. Esta dinámica ha resultado en una mayor eficiencia y colaboración en la consecución de los objetivos del proyecto.
                    </p>
                </div>

            </div>

            <div className='card_softskills'>
            <div className='card_top'>
            <div className='contenedor_imagen'>
            <Image className='icono' height={75} width={75} src='/imagenes/comunicacion.png'/>
            </div>
                <h3> &#x3C;Comunicación clara/&#x3E;</h3>
               </div>
                <p>
                Poseo la capacidad de comunicar ideas técnicas de manera clara y comprensible, facilitando la comprensión tanto para colegas técnicos como para no técnicos.
                </p>

                <div className='atrassf'>
                    <p>
                    La comunicación efectiva de asignaciones y responsabilidades es fundamental para minimizar errores y descoordinaciones dentro del equipo. Constantemente, asumo la responsabilidad de dividir y asignar tareas, proporcionando detalles específicos y requisitos necesarios. Esta práctica garantiza la congruencia y compatibilidad entre todas las partes del trabajo, promoviendo así un ambiente de trabajo más eficiente y sin fisuras.
                    </p>
                </div>

            </div>

            <div className='card_softskills'>
            <div className='card_top'>
            <div className='contenedor_imagen'>
            <Image className='icono' height={75} width={75} src='/imagenes/adaptabilidad.png'/>
            </div>
                <h3> &#x3C;Adaptabilidad/&#x3E;</h3>
               </div>
                <p>
                Me destaco por mi capacidad para adaptarme rápidamente a nuevos entornos, tecnologías y metodologías en el cambiante campo del desarrollo web.
                </p>

                <div className='atrassf'>
                    <p>
                    Durante las materias de mi carrera, he trabajado con diversos lenguajes y entornos de desarrollo. Gracias a las sólidas bases de lógica de programación que he adquirido, solo necesito un breve período de adaptación para familiarizarme con las nuevas sintaxis y funciones nativas de cada lenguaje. Esta capacidad de adaptación me permite trabajar de manera limpia y eficiente, ajustándome fácilmente al entorno requerido para cada proyecto.
                    </p>
                </div>

            </div>

            <div className='card_softskills'>
            <div className='card_top'>
                <div className='contenedor_imagen'>
            <Image className='icono'  height={75} width={75} src='/imagenes/autonomia.png'/>
                </div>
                <h3> &#x3C;Autonomía/&#x3E;</h3>
               </div>
                <p>
                Demuestro una fuerte capacidad para trabajar de manera independiente y tomar la iniciativa, especialmente en entornos que requieren un alto grado de autonomía.
                </p>

                <div className='atrassf'>
                    <p>
                    Cada proyecto que abordo es un nuevo reto que me impulsa a adquirir nuevos conocimientos a través de horas dedicadas a la investigación y análisis independiente. Esta práctica me permite mantenerme al tanto de temas actuales y anticipar fases de proyectos, incluso antes de recibir información en clase. Este enfoque proactivo contribuye a mi continuo crecimiento y preparación para desafíos futuros.
                    </p>
                </div>

            </div>



        </div>

        </div>
        </>
    )
}
export default SoftSkills;