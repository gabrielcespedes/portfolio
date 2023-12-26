import logo_g3 from '../assets/img/logo_g3.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGitAlt, faHtml5, faJsSquare, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';
import { faDatabase, faFileCsv, faJarWheat } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return(
        <>
        <header id='home' className='mt-3 pt-2 pb-3 mb-5 text-light' style={{ backgroundColor: '#964F4C' }}>
            <div className="container">
                <div className='ms-auto'>
                    <div className="container-fluid contenedor pt-5">
                        <div className='me-2'>
                            <h2>Hola! Soy Gabriel Céspedes,</h2>
                            <h2>Magíster en Ciencia Matemática y Programador.</h2>
                            <hr/>
                            <h3>Desarrollador Full Stack JavaScript / Desarrollador Python / Profesor de Física y Matemática.</h3>
                        </div>             
                    <img src={logo_g3} alt="imagen de perfil" className='ms-1'/>
                    </div>            
                </div>          
            </div>        
        </header>
        <section id='acerca-de-mi' className='container contenedor p-4'>
            <div className='me-5'>
                <h2>Acerca de mí</h2>
                <p>Docente con sólida experiencia en física y matemática, mi trayectoria educativa se ha fortalecido con la enseñanza de Minería de Datos e Internet de las Cosas. </p>
                <p>Mi formación en Ciencia de Datos y Desarrollo Web se respalda con proyectos educativos propios. Mi habilidad para resolver problemas se ha afianzado a lo largo de mi carrera y mi entusiasmo por la programación se combina con un interés en la adopción de nuevas tecnologías.</p>                
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