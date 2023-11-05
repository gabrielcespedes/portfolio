import artmarket from '../assets/img/artmarket.jpeg';
import clases from '../assets/img/clases.jpeg';
import ejercicios from '../assets/img/ejercicios.jpeg';
import sofia2 from '../assets/img/sofia2.jpg';
import sofia from '../assets/img/sofia.jpg';
import clafismat from '../assets/img/clafismat.jpeg';

const Works = () => {
    return(
        <>
            <section id='works' className='container-fluid p-4 mt-4 pt-5'>
                <div className='ms-5 me-5'>
                    <h1>Algunos trabajos</h1>
                    <div className="row">
                        <div className="col-12 col-md-6 col-xl-4 py-2  mt-3 div_card">
                            <div className="card border-0">
                                <div className="image-top div_card" style={{ backgroundImage: `url(${artmarket})`}}></div>
                                <div className="card-body cuerpo border border-1">
                                    <h5 className="card-title fw-bold">Marketplace ArteViva</h5>
                                    <p className="card-text">
                                    Plataforma de tipo Marketplace centrado en el arte digital. Los usuarios pueden registrarse, ingresar productos a la venta, añadir productos a sus favoritos, agregar productos a un carro de compras. Las tecnologías utilizadas son en Backend: <strong>NodeJS, Express JS, JWT Authentication</strong> (incorpora encriptación de claves de usuarios). En Frontend: librería <strong>React</strong>.</p>
                                    <div className="text-end button_container">
                                        <button type="button" class="btn btn-outline-dark mx-2">
                                            <a href="https://github.com/gabrielcespedes?tab=stars" target="_blank" className="text-dark" >
                                                <i className="fa-brands fa-github fa-2x"></i>
                                            </a>
                                        </button>
                                        <button type="button" class="btn btn-outline-dark">
                                            <a href="https://arteviva.netlify.app/" target="_blank" className="text-dark" >
                                                <i className="fa-solid fa-link fa-2x"></i>
                                            </a>
                                        </button>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 py-2  mt-3">
                            <div className="card border-0">
                                <div className="image-top div_card" style={{ backgroundImage: `url(${clases})`}}></div>
                                <div className="card-body cuerpo border border-1">
                                    <h5 className="card-title fw-bold">Web Clases Online</h5>
                                    <p className="card-text">
                                    Desarrollo de página web para promocionar el servicio de Clases Online de Física y Matemática. El proyecto se realizó mediante el framework <strong>Django</strong>. El administrador puede aplicar CRUD a los usuarios o estudiantes y a los borradores de ejercicios de las clases. Los usuarios pueden ingresar con sus credenciales para revisar sus borradores de clases correspondientes.</p>
                                    <div className="text-end button_container">
                                        <button type="button" class="btn btn-outline-dark">
                                            <a href="https://gcespedes.pythonanywhere.com/" target="_blank" className="text-dark" >
                                                <i className="fa-solid fa-link fa-2x"></i>
                                            </a>
                                        </button>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 py-2  mt-3">
                            <div className="card border-0">
                                <div className="image-top div_card" style={{ backgroundImage: `url(${ejercicios})`}}></div>
                                <div className="card-body cuerpo border border-1">
                                    <h5 className="card-title fw-bold">Web Guías Interactivas</h5>
                                    <p className="card-text">
                                    Página web para ejercitación autónoma de competencias matemáticas. Para su realización se utilizó el lenguaje de programación <strong>Javascript</strong>. El estudiante puede avanzar distintas etapas de módulos de ejercicios al conseguir responder de forma correcta las preguntas.</p>
                                    <div className="text-end button_container">
                                        <button type="button" class="btn btn-outline-dark">
                                            <a href="https://gabrielcespedes.github.io/matematicaII/" target="_blank" className="text-dark" >
                                                <i className="fa-solid fa-link fa-2x"></i>
                                            </a>
                                        </button>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 py-2  mt-3">
                            <div className="card border-0">
                                <div className="image-top div_card" style={{ backgroundImage: `url(${sofia2})`}}></div>
                                <div className="card-body cuerpo border border-1">
                                    <h5 className="card-title fw-bold">Web-App para Resumir Temas</h5>
                                    <p className="card-text">
                                    Aplicación web diseñada para ingresar texto a modo de resúmenes de distintos temas y organizarlos en forma secuencial. Ingresando como administrador se pueden editar la posición de los temas a exponer. Se realizó mediante el lenguaje de programación <strong>Python</strong>, específicamente con el framework <strong>Django</strong>.</p>
                                    <div className="text-end button_container">
                                        <button type="button" class="btn btn-outline-dark">
                                            <a href="https://gabrielcespedes.pythonanywhere.com/" target="_blank" className="text-dark" >
                                                <i className="fa-solid fa-link fa-2x"></i>
                                            </a>
                                        </button>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 py-2  mt-3">
                            <div className="card border-0">
                                <div className="image-top div_card" style={{ backgroundImage: `url(${sofia})`}}></div>
                                <div className="card-body cuerpo border border-1">
                                    <h5 className="card-title fw-bold">Web-App Ingresar Ejercicios</h5>
                                    <p className="card-text">
                                    Aplicación web desarrollada con el objetivo de disponibilizar distintos ejercicios para asignaturas y que sea fácil, por parte del alumno, buscar problemas de ejemplo de distintos temas. Se realizó mediante el framework <strong>Django</strong>.</p>
                                    <div className="text-end button_container">
                                        <button type="button" class="btn btn-outline-dark">
                                            <a href="https://cespedes.pythonanywhere.com/mate/" target="_blank" className="text-dark" >
                                                <i className="fa-solid fa-link fa-2x"></i>
                                            </a>
                                        </button>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-xl-4 py-2  mt-3">
                            <div className="card border-0">
                                <div className="image-top div_card" style={{ backgroundImage: `url(${clafismat})`}}></div>
                                <div className="card-body cuerpo border border-1">
                                    <h5 className="card-title fw-bold">Grilla Bootstrap</h5>
                                    <p className="card-text">
                                    Confección de página web mediante el uso del framework <strong>Bootstrap</strong>. Se realiza un sistema de grillas para emular una página de venta de cursos web. La página web es adaptable a distintos dispositivos (diseño responsivo). Se utilizan los componentes navbar, card y formulario.</p>
                                    <div className="text-end button_container">
                                        <button type="button" class="btn btn-outline-dark mx-2">
                                            <a href="https://github.com/gabrielcespedes/04_d_bootstrap" target="_blank" className="text-dark" >
                                                <i className="fa-brands fa-github fa-2x"></i>
                                            </a>
                                        </button>
                                        <button type="button" class="btn btn-outline-dark">
                                            <a href="https://gabrielcespedes.github.io/04_d_bootstrap/#" target="_blank" className="text-dark" >
                                                <i className="fa-solid fa-link fa-2x"></i>
                                            </a>
                                        </button>
                                    </div>                        
                                </div>
                            </div>
                        </div>
                    </div>                    
                </div>                                 
            </section>        
        </>
    )
}

export default Works;