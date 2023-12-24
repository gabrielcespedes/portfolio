import { useRef } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Works from './components/Works';
import Contact from './components/Contact';



function App() {

  // variables para usar landing page
  const homeRef = useRef(null);
  const worksRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behaviour: 'smooth' });
  };

  
  return (
    <>
      <Navbar 
        scrollToHome = { () => scrollToSection(homeRef)}
        scrollToWorks = { () => scrollToSection(worksRef)}
        scrollToContact = { () => scrollToSection(contactRef) }        
      />
      <div ref={homeRef}>
        <Home/>
      </div>
      <div ref={worksRef}>
        <Works />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <Footer />                        
    </>
  );
}

export default App;
