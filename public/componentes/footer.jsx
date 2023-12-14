
import styles from '../Estilos/estilos.css'
import { Dosis } from 'next/font/google';
import Image from 'next/image';


export function Footer() {



  return (
    <div className='footer'>
    <h1 className='texto_mediano'>&#x3C;CONTACTAME</h1>
    <div className='imagenes'>
    <a href='https://github.com/ToshiKaji' target='_blank'>
    <Image width={50} height={50} src="/imagenes/github.png" />
    </a>
    <a href='https://wa.link/05ss1r' target='_blank' >
    <Image width={50} height={50} src="/imagenes/whatsapp.png" />
    </a>
    <a href='https://www.linkedin.com/in/antonio-caballero-b55b10274' target='_blank' >
    <Image width={50} height={50} src="/imagenes/linkedin.png" />
    </a>
    <a href='mailto:toshicaballero@outlook.com?Subject=¡Me%20interesan%20tus%20servicios!' target='_blank'>
    <Image width={50} height={50} src="/imagenes/outlook.png" />
    </a>
    </div>
    <h1 className='texto_mediano'>/&#x3E;</h1>
    </div>
  )
}
export default Footer;

