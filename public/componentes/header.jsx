
import styles from '../Estilos/estilos.css'

export function Header() {

    
  return (
    <div className='header'>
        
        <div className='items_header'>
            
           
            <a href='/#yo'>
                <h2>	&#x3C;
                    Sobre mi
                    	&#x3E;
                </h2>
            </a>
           

                   
            <a href='/#proyectos'>
                <h2>
                    &#x3C;
                    Proyectos
                    &#x3E;
                </h2>
            </a>
            

            <a href='/#softskills'>
                <h2>
                &#x3C;
                Soft skills
                &#x3E;
                </h2>
            </a>

            <a href='/#cv'>
                <h2>
                &#x3C;
                Curriculum
                &#x3E;
                </h2>
            </a>

        </div>
        
    </div>
  )
}
