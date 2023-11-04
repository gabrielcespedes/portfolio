import logo_g3 from '../assets/img/logo_g3.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFileCsv, faJarWheat } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return(
        <>
        <header id='Hero-Section' className='mt-4 pt-2 mb-5'>
            <div className="container">
                <div className='ms-auto'>
                    <div className="container-fluid contenedor pt-5">
                        <div className='me-2'>
                            <h2>Hola! Soy Gabriel Céspedes, Magíster en Ciencia Matemática y Programador.</h2>
                            <hr/>
                            <h3>Desarrollador Full Stack JavaScript / Desarrollador Python / Profesor de Física y Matemática.</h3>
                        </div>             
                    <img src={logo_g3} alt="imagen de perfil" className='ms-1'/>
                    </div>            
                </div>          
            </div>        
        </header>
        <section id='Acerca-de-mi' className='container contenedor p-4'>
            <div className='me-5'>
                <h2>Acerca de mí</h2>
                <p>Mi mayor pasión es aprender distintos temas de Tecnologías de la Información,    sobretodo del ámbito del Desarrollo Web (Frontend y Backend) y de la Ciencia de   Datos (Machine Learning). Busco continuamente integrar estas tecnologías en la  educación en Física y Matemática.</p>
                <p>Gracias a este profundo interés he desarrollado aplicaciones web para recopilar  ejercicios para mis estudiantes, resumir temas y disponibilizar el material de mis   clases online.</p>
                <p>Trato de estar al tanto de los cambios en el ámbito tecnológico lo que me  mantiene motivado a continuar aprendiendo. Actualmente trabajo como profesor de  distintas áreas incluyendo la Minería de Datos. </p>
            </div>
            <div className='ms-3 contenedor-icons'>
                    <div className="face my-1">
                        <div className="con">
                            <FontAwesomeIcon icon={faNodeJs} color="#34B01F" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div className="con">
                            <FontAwesomeIcon icon={faReact} color="#25A1D8" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div className="con">
                            <FontAwesomeIcon icon={faJsSquare} color="#D8BA25" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div className="con">
                            <FontAwesomeIcon icon={faBootstrap} color="#822FF5" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div className="con">
                            <FontAwesomeIcon icon={faCss3} color="#2F6DF5" />
                        </div>                        
                    </div> 
                    <div className="face my-1">
                        <div className="con">
                            <FontAwesomeIcon icon={faHtml5} color="#F5462F" />
                        </div>                        
                    </div>                    
                    <div className="face my-1">
                        <div className="con">
                            <FontAwesomeIcon icon={faPython} color="#EFD81D" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div className="con">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div className='con'>
                            <FontAwesomeIcon icon={faDatabase} color="#2F89F5" />
                        </div>                        
                    </div>                     
            </div>                    
        </section>
    </>
    )
}

export default Home;