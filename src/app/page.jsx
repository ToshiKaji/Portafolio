
import Styles from '../../public/Estilos/estilos.css'
import { Footer } from '../../public/componentes/footer'
import {Header} from '../../public/componentes/header'
import {AcercaDeMi} from '../../public/componentes/acercademi'
import Proyectos from '../../public/componentes/proyectos'
import SoftSkills from '../../public/componentes/softskills'
import Link from 'next/link'
import { Saira_Extra_Condensed } from 'next/font/google'

export default function Home() {
 
  const HandleNavOpc = (seccion) => {

    window.location.href = seccion;
    
  }

  return (
    <>
    <Header/>
    <div className='home'>
     
        <AcercaDeMi/>
        
        <Proyectos/>

        <SoftSkills/>

      <div id='cv' className='curriculum'>
        <a href='/assets/Antoniocv.pdf' className='button_cv'>
          <h3 className='texto_button_cv'>&#x3C;Descarga mi cv/&#x3E;</h3>
        </a>
      </div> 
    </div>
    <Footer/>
    </>
  )
}
