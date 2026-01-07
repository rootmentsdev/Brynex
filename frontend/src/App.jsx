
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BrandPage from './pages/BrandPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage.jsx';  
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Header from './components/Header';
import Footer from './components/Footer'; 
import HomePage from './pages/HomePage';
import SinglePage from './pages/SinglePage';

import './App.css';


function App() {
 
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        {/* Single Page Layout - Home with all sections */}
        <Route path="/" element={
          <PageTransition>
            <SinglePage />
          </PageTransition>
        } />
        
        {/* Individual Pages (kept for direct access) */}
        <Route path="/home" element={
          <PageTransition>
            <HomePage />
          </PageTransition>
        } />
        <Route path="/about" element={
          <PageTransition>
            <AboutPage/>
          </PageTransition>
        } />
        <Route path="/brand" element={
          <PageTransition>
            <BrandPage />
          </PageTransition>
        } />
        <Route path="/careers" element={
          <PageTransition>
            <CareersPage />
          </PageTransition>
        } />
        <Route path="/contact" element={
          <PageTransition>
            <ContactPage />
          </PageTransition>
        } />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

