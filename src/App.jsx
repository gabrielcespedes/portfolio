import { useState } from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Works from './components/Works';
import Contact from './components/Contact';

import {Routes, Route, BrowserRouter} from 'react-router-dom';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <Routes>        
            <Route path='/' element = {<Home />} />
            <Route path='/works' element = {<Works />}/>
            <Route path='/contact' element = {<Contact/>}/>         
        </Routes>
        <Footer />
      </BrowserRouter>     
    </>
  )
}

export default App
