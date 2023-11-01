import { Link, NavLink } from 'react-router-dom';

import logo_2 from '../assets/img/logo_2.png';
import { useState } from 'react';

const Navbar = () => {

    const [isNavOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!isNavOpen);
    }

    const closeNav = () => {
        setNavOpen(false);
    }

    return(
        <nav id='navbar_id' className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top fs-5 py-0">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    <img src={logo_2} alt="Logo"/>
                </Link>
                <button className="navbar-toggler" type="button" onClick={toggleNav}>
                    <span><i className="fa-solid fa-bars"></i></span>
                </button>
                <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link" href="#Acerca-de-mi" onClick={closeNav}>Acerca de mí</Link>
                        </li>                        
                        <li className="nav-item">
                            <Link to="/works" className="nav-link" onClick={closeNav}>Trabajos</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link" onClick={closeNav}>Contacto</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>        
    )
}

export default Navbar;