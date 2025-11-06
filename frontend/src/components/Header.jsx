import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../assets/Logo.png';
import '../components/Header.css';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [menuItemsVisible, setMenuItemsVisible] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      // Small delay to trigger animation after menu opens
      setTimeout(() => setMenuItemsVisible(true), 50);
    } else {
      setMenuItemsVisible(false);
    }
  }, [isMenuOpen]);

  const isActive = (path) => location.pathname === path;

  const menuItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/brand', label: 'Brand' },
    { path: '/technology', label: 'Technology' },
    { path: '/leadership', label: 'Leadership' },
    { path: '/careers', label: 'Careers' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <style>
        {`
          @keyframes slideInRight {
            from {
              opacity: 0;
              transform: translateX(100%);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
          
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes scaleIn {
            from {
              opacity: 0;
              transform: scale(0.5) rotate(-180deg);
            }
            to {
              opacity: 1;
              transform: scale(1) rotate(0deg);
            }
          }

          @keyframes fadeInBlur {
            from {
              opacity: 0;
              backdrop-filter: blur(0px);
            }
            to {
              opacity: 1;
              backdrop-filter: blur(10px);
            }
          }

          @keyframes slideInLeft {
            from {
              opacity: 0;
              transform: translateX(-40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }

          .mobile-menu-enter {
            animation: slideInRight 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }

          .mobile-menu-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.7);
            z-index: 999;
            animation: fadeInBlur 0.4s ease-out forwards;
            backdrop-filter: blur(10px);
          }

          .hamburger-icon {
            position: relative;
            overflow: hidden;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .hamburger-icon:active {
            transform: scale(0.95);
            background-color: rgba(0, 0, 0, 0.1) !important;
          }

          .hamburger-icon::after {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.2);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
          }

          .hamburger-icon:active::after {
            width: 100px;
            height: 100px;
            transition: width 0s, height 0s;
          }

          .hamburger-line {
            display: block;
            width: 26px;
            height: 2.5px;
            background-color: #171717;
            margin: 5px 0;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            transform-origin: center;
            border-radius: 2px;
            position: relative;
            z-index: 1;
          }

          .hamburger-icon.open .hamburger-line:nth-child(1) {
            transform: rotate(45deg) translate(8px, 8px);
            background-color: #fff;
          }

          .hamburger-icon.open .hamburger-line:nth-child(2) {
            opacity: 0;
            transform: scaleX(0);
          }

          .hamburger-icon.open .hamburger-line:nth-child(3) {
            transform: rotate(-45deg) translate(8px, -8px);
            background-color: #fff;
          }

          .menu-item-wrapper {
            position: relative;
            overflow: hidden;
            margin-bottom: 12px;
          }

          .menu-item-wrapper::after {
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            width: 3px;
            background: #fff;
            transform: scaleY(0);
            transform-origin: top;
            transition: transform 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
          }

          .menu-item-wrapper:hover::after,
          .menu-item-wrapper.active::after {
            transform: scaleY(1);
          }

          .menu-item-number {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            width: 36px;
            height: 36px;
            border-radius: 8px;
            background: rgba(255, 255, 255, 0.1);
            color: #fff;
            text-align: center;
            line-height: 1;
            font-size: 14px;
            font-weight: 600;
            margin-right: 16px;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            transform: scale(0) rotate(-180deg);
            border: 1px solid rgba(255, 255, 255, 0.2);
          }

          .menu-item-wrapper:hover .menu-item-number {
            transform: scale(1.1) rotate(360deg);
            background: rgba(255, 255, 255, 0.2);
            border-color: rgba(255, 255, 255, 0.4);
          }

          .menu-item-wrapper.active .menu-item-number {
            background: #fff;
            color: #171717;
            transform: scale(1);
          }

          .menu-item-link {
            position: relative;
            z-index: 1;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            display: flex;
            align-items: center;
            padding: 16px 20px;
            border-radius: 12px;
            color: #fff;
            overflow: hidden;
          }

          .menu-item-link::before {
            content: '';
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.2);
            transform: translate(-50%, -50%);
            transition: width 0.6s, height 0.6s;
            z-index: 0;
          }

          .menu-item-link:active::before {
            width: 300px;
            height: 300px;
            transition: width 0s, height 0s;
          }

          .menu-item-link:active {
            transform: translateX(12px) scale(0.98);
          }

          .menu-item-wrapper:hover .menu-item-link {
            transform: translateX(12px);
            color: #fff !important;
            background: rgba(255, 255, 255, 0.05);
          }

          .menu-item-wrapper.active .menu-item-link {
            color: #fff !important;
            font-weight: 600;
            background: rgba(255, 255, 255, 0.08);
          }

          .menu-item-text {
            font-size: 18px;
            letter-spacing: 0.5px;
            transition: all 0.3s ease;
          }

          .mobile-menu-divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
            margin: 8px 0;
            opacity: 0;
            animation: fadeInUp 0.5s ease-out forwards;
          }
        `}
      </style>
      <nav className='d-flex justify-content-between align-items-center p-3 border-bottom position-sticky top-0' style={{ zIndex: 1001, backgroundColor: '#fff' }}>
          <div className='d-flex align-items-center mx-3 ms-md-5'>
              <Link to="/" className='text-decoration-none mx-3 ms-md-5 '>
                  <img src={logo} alt="Logo" style={{ maxHeight: '50px', transition: 'transform 0.3s ease' }} />
              </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className='d-none d-md-flex'>
              <ul style={{
                  fontSize:"16px",
                  fontFamily: "'DM Sans', sans-serif",
              }} className='d-flex list-unstyled mb-0 me-5 Header-ul'>
                  {menuItems.map((item) => (
                    <li key={item.path} className='me-4'>
                      <Link 
                        className={`text-decoration-none ${isActive(item.path) ? 'active-link' : ''}`} 
                        to={item.path}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
              </ul>
          </div>

          {/* Hamburger Menu Button (Mobile) */}
          <button 
              className={`d-md-none btn btn-link me-3 p-0 text-decoration-none hamburger-icon ${isMenuOpen ? 'open' : ''}`}
              style={{
                color: '#000', 
                border: 'none', 
                background: 'transparent',
                cursor: 'pointer',
                padding: '8px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '40px',
                height: '40px'
              }} 
              onClick={toggleMenu}
              aria-label="Toggle menu"
          >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
          </button>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <div 
              className='mobile-menu-overlay d-md-none'
              onClick={toggleMenu}
            />
          )}

          {/* Mobile Menu */}
          {isMenuOpen && (
              <div 
                className='d-md-none position-fixed end-0 w-100 shadow-lg mobile-menu-enter' 
                style={{ 
                  zIndex: 1000, 
                  top: '0', 
                  backgroundColor: '#171717', 
                  height: '100vh',
                  overflowY: 'auto',
                  boxShadow: '-4px 0 30px rgba(0, 0, 0, 0.5)'
                }}
              >
                  <div className="p-4 pt-5" style={{ paddingTop: '100px', paddingBottom: '40px' }}>
                    <ul style={{
                      fontFamily: "'DM Sans', sans-serif",
                    }} className='list-unstyled mb-0 Header-mobile-ul'>
                        {menuItems.map((item, index) => (
                          <React.Fragment key={item.path}>
                            <li 
                              className={`menu-item-wrapper ${isActive(item.path) ? 'active' : ''}`}
                              style={{
                                animationDelay: `${index * 0.1}s`,
                                opacity: menuItemsVisible ? 1 : 0,
                                transform: menuItemsVisible ? 'translateX(0)' : 'translateX(-40px)',
                                transition: `opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s, transform 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s`
                              }}
                            >
                              <Link 
                                className={`text-decoration-none menu-item-link ${isActive(item.path) ? 'active-link' : ''}`} 
                                to={item.path} 
                                onClick={toggleMenu}
                              >
                                <span className="menu-item-text" style={{ position: 'relative', zIndex: 1 }}>
                                  {item.label}
                                </span>
                              </Link>
                            </li>
                            {index < menuItems.length - 1 && (
                              <div 
                                className="mobile-menu-divider"
                                style={{
                                  animationDelay: `${index * 0.1 + 0.2}s`
                                }}
                              />
                            )}
                          </React.Fragment>
                        ))}
                    </ul>
                  </div>
              </div>
          )}
      </nav>
    </>
  )
}

export default Header
