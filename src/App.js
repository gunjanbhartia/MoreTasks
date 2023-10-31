import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Index from './pages/Index';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from './pages/Services';
import './services.css';
import Product from './pages/Product';
import WhyUs from './pages/WhyUs';
// import './WhyUs.css';
import AboutUs from './pages/AboutUs';
// import Trial from './pages/Trial';
import ContactUs from './pages/ContactUs';




function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/services" element={<Services />} />
      <Route path="/product" element={<Product/>}/>
      <Route path="/why-us" element={<WhyUs/>}/>
      <Route path="/about-us" element={<AboutUs/>}/>
      <Route path="/contact-us" element={<ContactUs/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    
    
    
    </>
      
      
  );
}

export default App;
