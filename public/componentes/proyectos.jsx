import styles from '../Estilos/estilos.css'
import Image from 'next/image';


export function Proyectos() {
    return (
     
        <>
        <div id='proyectos' className='proyectos'>
            <div className='titulo'>
        <h1   style={{color:'#495852'}} >
            &#x3C;Proyectos relevantes/&#x3E;
        </h1>
            </div>

            <div className='cuadricula'>
                <a href='https://github.com/ToshiKaji/Proyecto_Catedra_LIS.git' target='_blank'>
                <div className='tarjeta'>
                  <h3>&#x3C;La Cuponera/&#x3E;</h3>  
                  <Image style={{padding:'5px'}} height={190} width={400} src='/imagenes/lacuponera.jpg' />
                  <h3>&#x3C;Descripcion/&#x3E;</h3> 
                  <p>
                  Se trata de una pagina de compra de cupones ofertados por empresas la cual cuenta con su area administrativa(Laravel), la de los clientes(php, css, html) y el uso de una API creada para la validacion del uso de cada cupon con un programa creado con windows form C#  
                  </p>  
                  <h3>&#x3C;Tecnologias/&#x3E;</h3>
                  <div className='card_tecnologias'>
                  <Image height={50} width={50} src='/imagenes/php.png'/>
                  <Image height={50} width={50} src='/imagenes/html.png'/>
                  <Image height={50} width={50} src='/imagenes/css.png'/>
                  <Image height={50} width={50} src='/imagenes/csharp.png'/>
                  <Image height={50} width={50} src='/imagenes/laravel.png'/>
                  </div>

                </div>
                </a>


                <a href='https://github.com/Cgeov/Haru-Front-End.git' target='_blank'>
                <div className='tarjeta'>
                  <h3>&#x3C;Haru/&#x3E;</h3>  
                  <Image  style={{padding:'5px'}} height={190} width={400} src='/imagenes/haru.jpg'  />
                  <h3>&#x3C;Descripcion/&#x3E;</h3> 
                  <p>
                  Una pagina web desarrollada para funcionar como catalogo de servicios y prodcutos proporcionado por Haru donde se pueden hacer cotizaciones y hacer pedidos del lado de cliente, del lado del administrador podemos manejar productos, cotizaciones y pedidos
                  </p>  
                  <h3>&#x3C;Tecnologias/&#x3E;</h3>
                  <div className='card_tecnologias'>
                  <Image height={50} width={50} src='/imagenes/firebase.png'/>
                  <Image height={50} width={50} src='/imagenes/nextjs.png'/>
                  <Image height={50} width={50} src='/imagenes/html.png'/>
                  <Image height={50} width={50} src='/imagenes/tailwind.png'/>
                  <Image height={50} width={50} src='/imagenes/laravel.png'/>
                  <Image height={50} width={50} src='/imagenes/js.png'/> 
                  <Image height={50} width={50} src='/imagenes/figma.png'/> 
                  </div>

                </div>
                </a>

                <a href='https://github.com/carlossalazar7/ProyectoDPS02T-2023.git' target='_blank'>
                <div className='tarjeta'>
                  <h3>&#x3C;La Cuponera(app)/&#x3E;</h3>  
                  <Image style={{padding:'5px'}} height={190} width={273} src='/imagenes/lacuponerareact.jpg'/>
                  <h3>&#x3C;Descripcion/&#x3E;</h3> 
                  <p>
                  Una aplicacion movil creada en base a las necesidades para la version web paro extrapolado a aplicacion movil con la ayuda de react native para su desarrollo y firebase para almacenar datos en la nube
                  </p>  
                  <h3>&#x3C;Tecnologias/&#x3E;</h3>
                  <div className='card_tecnologias'>
                  <Image height={50} width={50} src='/imagenes/figma.png'/> 
                  <Image height={50} width={50} src='/imagenes/reacnative.png'/>
                  <Image height={50} width={50} src='/imagenes/firebase.png'/>
                  <Image height={50} width={50} src='/imagenes/js.png'/>
                  <Image height={50} width={50} src='/imagenes/css.png'/>    
                 
                  </div>

                </div>
                </a>


                

            </div>



        </div>
        </>

        )}

export default Proyectos;