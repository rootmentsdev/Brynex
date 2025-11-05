import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/Logo.png';
import '../components/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => location.pathname === path;

  return (
    <nav className='d-flex justify-content-between align-items-center p-3 border-bottom position-relative'>
        <div className='d-flex align-items-center ms-3'>
            <Link to="/" className='text-decoration-none'>
                <img src={logo} alt="Logo" style={{ maxHeight: '50px' }} />
            </Link>
        </div>
        
        {/* Desktop Menu */}
        <div className='d-none d-md-flex'>
            <ul style={{
                fontSize:"16px",
                fontFamily: "'DM Sans', sans-serif",
            }} className='d-flex list-unstyled mb-0 me-5 Header-ul'>
                <li className='me-4'><Link className={`text-decoration-none ${isActive('/') ? 'active-link' : ''}`} to="/" style={{color: '#000'}}>Home</Link></li>
                <li className='me-4'><Link className={`text-decoration-none ${isActive('/about') ? 'active-link' : ''}`} to="/about" style={{color: '#000'}}>About</Link></li>
                <li className='me-4'><Link className={`text-decoration-none ${isActive('/brand') ? 'active-link' : ''}`} to="/brand" style={{color: '#000'}}>Brand</Link></li>
                <li className='me-4'><Link className={`text-decoration-none ${isActive('/technology') ? 'active-link' : ''}`} to="/technology" style={{color: '#000'}}>Technology</Link></li>
                <li className='me-4'><Link className={`text-decoration-none ${isActive('/leadership') ? 'active-link' : ''}`} to="/leadership" style={{color: '#000'}}>Leadership</Link></li>
                <li className='me-4'><Link className={`text-decoration-none ${isActive('/careers') ? 'active-link' : ''}`} to="/careers" style={{color: '#000'}}>Careers</Link></li>
                <li className='me-4'><Link className={`text-decoration-none ${isActive('/contact') ? 'active-link' : ''}`} to="/contact" style={{color: '#000'}}>Contact</Link></li>
            </ul>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button 
            className='d-md-none btn btn-link me-3 p-0 text-decoration-none'
            style={{color: '#000', border: 'none', fontSize: '24px', lineHeight: '1'}} 
            onClick={toggleMenu}
            aria-label="Toggle menu"
        >
            <span style={{ fontSize: '28px' }}>{isMenuOpen ? '✕' : '☰'}</span>
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
            <div className='d-md-none position-absolute start-0 w-100 shadow-sm' style={{ zIndex: 1000, top: '100%', backgroundColor: '#fff', borderTop: '1px solid #dee2e6' }}>
                 <ul style={{
                fontSize:"16px",
                fontFamily: "'DM Sans', sans-serif",
            }} className='list-unstyled p-3 mb-0 Header-mobile-ul'>
                    <li className='mb-3'><Link className={`text-decoration-none ${isActive('/') ? 'active-link' : ''}`} to="/" onClick={toggleMenu} style={{color: '#000'}}>Home</Link></li>
                    <li className='mb-3'><Link className={`text-decoration-none ${isActive('/about') ? 'active-link' : ''}`} to="/about" onClick={toggleMenu} style={{color: '#000'}}>About</Link></li>
                    <li className='mb-3'><Link className={`text-decoration-none ${isActive('/brand') ? 'active-link' : ''}`} to="/brand" onClick={toggleMenu} style={{color: '#000'}}>Brand</Link></li>
                    <li className='mb-3'><Link className={`text-decoration-none ${isActive('/technology') ? 'active-link' : ''}`} to="/technology" onClick={toggleMenu} style={{color: '#000'}}>Technology</Link></li>
                    <li className='mb-3'><Link className={`text-decoration-none ${isActive('/leadership') ? 'active-link' : ''}`} to="/leadership" onClick={toggleMenu} style={{color: '#000'}}>Leadership</Link></li>
                    <li className='mb-3'><Link className={`text-decoration-none ${isActive('/careers') ? 'active-link' : ''}`} to="/careers" onClick={toggleMenu} style={{color: '#000'}}>Careers</Link></li>
                    <li className='mb-3'><Link className={`text-decoration-none ${isActive('/contact') ? 'active-link' : ''}`} to="/contact" onClick={toggleMenu} style={{color: '#000'}}>Contact</Link></li>
                </ul>
            </div>
        )}
    </nav>
  )
}

export default Header
