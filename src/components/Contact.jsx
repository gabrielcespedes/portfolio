import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
            .sendForm(
                'service_q0krb34',
                'template_aidp5fk',
                form.current,
                '8CN9ILBLahDbld3YA'
            )
            .then(
                () => {
                    alert('Mensaje enviado!');
                    window.location.reload(false);
                },
                () => {
                    alert('Error en el envío del mensaje. Por favor, intente nuevamente.')
                }
            )
    }

    return(
        <>
            <section id='contact_zone' className="container-fluid p-4 mt-4 pt-5">
                <div className='ms-5'>                
                    <h1>Contáctame</h1>
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
                        <div className='my-3 text-end'>
                            <input type='submit' id='final_button' className='btn btn-lg btn-dark' value="Enviar"></input>
                        </div>
                    </form>
                </div>                                               
            </section>
        </>
    )
};

export default Contact;