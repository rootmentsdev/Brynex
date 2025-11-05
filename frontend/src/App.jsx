
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import BrandPage from './pages/BrandPage';
import TechnologyPage from './pages/TechnologyPage';
import LeadershipPage from './pages/LeadershipPage';
import CareersPage from './pages/CareersPage';
import ContactPage from './pages/ContactPage.jsx';  
import ScrollToTop from './components/ScrollToTop';
import PageTransition from './components/PageTransition';
import Header from './components/Header';

import HomePage from './pages/HomePage';

import './App.css';


function App() {
 
  return (
    <div>
      <Header />
      <ScrollToTop />
      <Routes>
        {/* Admin routes - Full Screen (no mobile container) */}
        <Route path="/" element={
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
        <Route path="/technology" element={
          <PageTransition>
            <TechnologyPage />
          </PageTransition>
        } />
        <Route path="/leadership" element={
          <PageTransition>
            <LeadershipPage />
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
    </div>
  );
}

export default App;

