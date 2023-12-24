import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        const service = `${import.meta.env.VITE_SERVICE}`;
        const template = `${import.meta.env.VITE_TEMPLATE}`; 
        const token = `${import.meta.env.VITE_TOKEN}`;
        emailjs
            .sendForm(
                service,
                template,
                form.current,
                token 
            )
            .then(
                () => {                    
                    alert('Mensaje enviado!');
                    // window.location.reload(false);
                },
                () => {
                    alert('Error en el envío del mensaje. Por favor, intente nuevamente.')
                }
            )
    }

    return(
        <>
            <section id='contacto' className="container-fluid ps-2 pe-5 mt-4 pt-5">
                <div className='ms-5'>                
                <h1 className='mt-1 mb-4'>Contáctame <a className='text-dark' href="/cv.pdf" download>CV <i class="fa fa-download"></i></a></h1>                   
                    <form ref={form} onSubmit={sendEmail}>
                        <div className='form-group mb-3'>
                            <label className='mb-2'>Nombre</label>
                            <input type='text' name='name' className='form-control' placeholder='Nombre' required></input>
                        </div>
                        <div className='form-group mb-3'>
                            <label className='mb-2'>Email</label>
                            <input type='email' name='email' className='form-control' placeholder='Email' required></input>
                        </div>
                        <div className='form-group mb-3'>
                            <label className='mb-2'>Asunto</label>
                            <input type='text' name='subject' className='form-control' placeholder='Asunto' required></input>
                        </div>
                        <div className='form-group'>
                            <label className='mb-2'>Mensaje</label>
                            <textarea name='message' className='form-control' placeholder='Escribe aquí tu mensaje' required></textarea>
                        </div>
                        <div className='mt-5 pb-5 text-end hov'>
                            <input type='submit' id='final_button' className='btn btn-lg btn-dark' value="Enviar"></input>
                        </div>
                    </form>
                </div>                                               
            </section>
        </>
    )
};

export default Contact;