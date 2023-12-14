
import styles from '../Estilos/estilos.css'

export function Header() {
  return (
    <div className='header'>
        
        <div className='items_header'>
            
           
            <a href='http://localhost:3000/#yo'>
                <h2>	&#x3C;
                    Sobre mi
                    	&#x3E;
                </h2>
            </a>
           

                   
            <a href='http://localhost:3000/#proyectos'>
                <h2>
                    &#x3C;
                    Proyectos
                    &#x3E;
                </h2>
            </a>
            

            <a href='http://localhost:3000/#softskills'>
                <h2>
                &#x3C;
                Soft skills
                &#x3E;
                </h2>
            </a>

            <a href='http://localhost:3000/#cv'>
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
