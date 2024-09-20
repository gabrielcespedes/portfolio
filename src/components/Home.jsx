import logo_g4 from '../assets/img/logo_g4.jpeg';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap, faCss3, faGitAlt, faGithub, faHtml5, faJsSquare, faLaravel, faNodeJs, faPhp, faPython, faReact, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faChartBar, faChartLine, faCode, faCube, faDatabase,  faDiagramNext,  faDiagramPredecessor,  faDiagramSuccessor,  faFileCsv, faFlask, faNetworkWired, faProjectDiagram, faRobot, faServer, faTable } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    return(
        <>
        <header id='home' className='mt-3 pt-2 pb-3 mb-5 text-light' style={{ backgroundColor: '#964F4C' }}>
            <div className="container">
                <div className='ms-auto'>
                    <div className="container-fluid contenedor pt-5">
                        <div className='me-2'>
                            <h1>Gabriel Céspedes.</h1>
                            <h2>Magíster en Ciencia Matemática y Programador.</h2>
                            <hr/>
                            <h3>Tutor Data Science | M.Sc. en Matemática | Backend Dev. | Prof. Física y Matemática</h3>
                        </div>             
                    <img src={logo_g4} alt="imagen de perfil" className='ms-auto'/>
                    </div>            
                </div>          
            </div>        
        </header>
        <section id='acerca-de-mi' className='container contenedor p-4'>
            <div className='me-5'>
                <h2>Acerca de mí</h2>
                <p>Soy profesor de Ciencia de Datos, Matemática y Física. <br></br>
                Actualmente realizo docencia en Instituto y Academia. He realizado también docencia en Universidades, Liceos, Preuniversitarios y en clases particulares online. Busco continuamente integrar mi conocimiento en Matemáticas en la implementación de Modelos de Machine Learning. He fortalecido el aprendizaje de mis estudiantes a partir del desarrollo de aplicaciones web. Me apasiona el mundo TI.</p>                
            </div>
            <div className='ms-3 contenedor-icons'>
                    <div id="tensor_flow_icon" className="face my-1">
                        <div className='con'>
                            <FontAwesomeIcon icon={faProjectDiagram} color="#ea6306" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div id='scikit-lean_icon' className='con'>
                            <FontAwesomeIcon icon={faChartLine} color="#06a1ea" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div id='numpy_icon' className='con'>
                            <FontAwesomeIcon icon={faTable} color="#3890f3" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div id='pandas_icon' className='con'>
                            <FontAwesomeIcon icon={faFileCsv} color="#151e6a" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div id='python_icon' className="con">
                            <FontAwesomeIcon icon={faPython} color="#EFD81D" />
                        </div>                        
                    </div> 
                    <div className="face my-1">
                        <div id='tableau_icon' className='con'>
                            <FontAwesomeIcon icon={faChartBar} color="#16249b" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div id='django_icon' className='con'>
                            <FontAwesomeIcon icon={faServer} color="#19642b" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div id='flask_icon' className='con'>
                            <FontAwesomeIcon icon={faServer} color="#303732" />
                        </div>                        
                    </div>  
                    <div className="face my-1">
                        <div id='node_js_icon' className="con">
                            <FontAwesomeIcon icon={faNodeJs} color="#34B01F" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div id='react_js' className="con">
                            <FontAwesomeIcon icon={faReact} color="#25A1D8" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div id='javascript' className="con">
                            <FontAwesomeIcon icon={faJsSquare} color="#D8BA25" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div id='laravel' className='con'>
                            <FontAwesomeIcon icon={faLaravel} color="#f81235" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div id='php' className='con'>
                            <FontAwesomeIcon icon={faPhp} color="#554969" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div id='wordpress' className='con'>
                            <FontAwesomeIcon icon={faWordpress} color="#2c7eaf" />
                        </div>                        
                    </div>       
                    <div className="face my-1">
                        <div id='boostrap_icon' className="con">
                            <FontAwesomeIcon icon={faBootstrap} color="#822FF5" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div id='css_icon' className="con">
                            <FontAwesomeIcon icon={faCss3} color="#2F6DF5" />
                        </div>                        
                    </div> 
                    <div className="face my-1">
                        <div id='html_icon' className="con">
                            <FontAwesomeIcon icon={faHtml5} color="#F5462F" />
                        </div>                        
                    </div>                                      
                    <div className="face my-1">
                        <div id='sql_icon' className='con'>
                            <FontAwesomeIcon icon={faDatabase} color="#e37916" />
                        </div>                        
                    </div>                           
                    <div className="face my-1">
                        <div id='git_icon' className="con">
                            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
                        </div>                        
                    </div>
                    <div className="face my-1">
                        <div id='github_icon' className="con">
                            <FontAwesomeIcon icon={faGithub} color="#303732" />
                        </div>                        
                    </div>                                                     
            </div>                    
        </section>
    </>
    )
}

export default Home;