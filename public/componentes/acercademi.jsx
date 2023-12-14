import styles from '../Estilos/estilos.css'
import Image from 'next/image';

export function AcercaDeMi() {
  return (
    <>
     <div id='yo' className='sobre_mi'>

     
        <div className='contenedor_foto'>
        <h1 style={{color:'#495852'}} >
            &#x3C;Antonio Caballero
        </h1>
        <Image className='foto' width={250} height={312.5} src="/imagenes/yo.jpg" /> 
        <h1 style={{color:'#495852'}} >
            /&#x3E;
        </h1>
        </div>

        <div className='parrafo'>

        <h2 >
            &#x3C;Nombre completo
        </h2>
        <h3 style={{color:'#171c1a', fontSize:'20px'}}>Antonio José Caballero Bonilla</h3>
        <h2 >
            /&#x3E;
        </h2>

        <h2 >
            &#x3C;Fecha de nacimiento
        </h2>
        <h3 style={{color:'#171c1a', fontSize:'20px'}}>19 de mayo de 2001</h3>
        <h2 >
            /&#x3E;
        </h2>

        <h2 >
            &#x3C;Residencia
        </h2>
        <h3 style={{color:'#171c1a', fontSize:'20px'}}>El Salvador, San Salvador</h3>
        <h2 >
            /&#x3E;
        </h2>

        <h2 >
            &#x3C;Resumen
        </h2>
            <h3 style={{color:'#171c1a', fontSize:'20px'}}>Soy un estudiante de quinto año en Ingeniería en Ciencias de la Computación en la Universidad Don Bosco, El Salvador, apasionado por la aplicación práctica de mis conocimientos en el mundo real. Estoy en busca de mi primera experiencia profesional, ansioso por explorar nuevas tecnologías, librerías y frameworks que optimicen el desarrollo de software. Mi interés se extiende a las tecnologías emergentes, como la inteligencia artificial, y su aplicación en soluciones innovadoras.
            </h3>
            <h2 >
            /&#x3E;
        </h2>
        </div>
    </div>
    </>


  )}

  export default AcercaDeMi;