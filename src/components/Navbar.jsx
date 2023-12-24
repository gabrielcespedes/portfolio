import { Link } from 'react-scroll';

import logo_2 from '../assets/img/logo_2.png';
import { useState } from 'react';

const Navbar = ({ scrollToHome, scrollToWorks, scrollToContact }) => {
    const [isNavOpen, setNavOpen] = useState(false);
    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    }
    
    const scrollToAndCloseNav = (scrollFunction) => {
        scrollFunction();
        setNavOpen(false);
    }

    return(
        <nav id='navbar_id' className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top fs-5 py-0">
            <div className="container-fluid">
                <Link to="home" smooth={true} duration={500} className="navbar-brand" onClick={() => scrollToAndCloseNav(scrollToHome)}>
                    <img src={logo_2} alt="Logo"/>
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggleNav}>
                    <span><i className="fa-solid fa-bars"></i></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="acerca-de-mi" smooth={true} duration={500} className="nav-link"  onClick={() => scrollToAndCloseNav(scrollToHome)}>Acerca de mí</Link>
                        </li>                        
                        <li className="nav-item">
                            <Link to="trabajos" smooth={true} duration={500} className="nav-link" onClick={() => scrollToAndCloseNav(scrollToWorks)}>Trabajos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="contacto" smooth={true} duration={500} className="nav-link" onClick={() => scrollToAndCloseNav(scrollToContact)}>Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>        
    )
}

export default Navbar;