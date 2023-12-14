
import Styles from '../../public/Estilos/estilos.css'
import { Footer } from '../../public/componentes/footer'
import {Header} from '../../public/componentes/header'
import {AcercaDeMi} from '../../public/componentes/acercademi'
import Proyectos from '../../public/componentes/proyectos'
import SoftSkills from '../../public/componentes/softskills'
import Link from 'next/link'

export default function Home() {
  return (
    <>
    <Header/>
    <div className='home'>
     
        <AcercaDeMi/>
        
        <Proyectos/>

        <SoftSkills/>

      <div id='cv' className='curriculum'>
        <a href='/assets/AntonioCaballeroCV.pdf' className='button_cv'>
          <h3 className='texto_button_cv'>&#x3C;Descarga mi cv/&#x3E;</h3>
        </a>
      </div> 
    </div>
    <Footer/>
    </>
  )
}