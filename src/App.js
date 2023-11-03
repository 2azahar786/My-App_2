import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';

import NavBar from './Navbar';
import HeroSection from './HeroSection';
import Footer from './Footer';

const App= () =>{
  return(
    <div>
      <NavBar/>
      <HeroSection/>
      <Footer/>
    </div>
  )
};


export default App;