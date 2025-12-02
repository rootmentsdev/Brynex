import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { FaFacebook, FaLinkedinIn, FaInstagram, FaArrowRight } from 'react-icons/fa'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCareersClick = (e) => {
    e.preventDefault()
    scrollToSection('careers')
    // Then scroll to current openings after a brief delay
    setTimeout(() => {
      const element = document.getElementById('current-openings')
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }, 500)
  }

  return (
    <footer style={{ backgroundColor: '#171717' ,width: '100%' }}>
      <style>
        {`
          @media (min-width: 768px) {
            .footer-btn-desktop {
              font-size: 14px !important;
            }
          }
        `}
      </style>
      <Container className="py-4 py-md-5">
        {/* Top Section - Four Columns */}
        <Row className="g-4">
          {/* Social Media Icons Column */}
          <Col xs={12} sm={6} md={3} className="d-flex align-items-start justify-content-center justify-content-md-start mb-3 mb-md-0">
            <div className="d-flex gap-3">
              <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebook className="text-white" style={{ fontSize: '22px' }} /></a>
              <a href="https://www.linkedin.com/company/brynex-apparels/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className="text-white" style={{ fontSize: '22px' }} /></a>
              <a href="https://www.instagram.com/suitorguy_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=all" target="_blank" rel="noopener noreferrer"><FaInstagram className="text-white" style={{ fontSize: '22px' }} /></a>
            </div>
          </Col>

          {/* Office Address Column */}
          <Col xs={12} sm={6} md={3} className="d-flex flex-column text-center text-md-start mb-4 mb-md-0">
            <h6 className="text-white fw-bold text-uppercase mb-3 d-md-none" style={{ fontSize: '16px' }}>
              OFFICE ADDRESS
            </h6>
            <h6 className="text-white fw-bold text-uppercase mb-3 d-none d-md-block" style={{ fontSize: '14px' }}>
              OFFICE ADDRESS
            </h6>
            <p className="text-white mb-1 d-md-none" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              BRYNEX APPARELS PRIVATE LIMITED
            </p>
            <p className="text-white mb-1 d-none d-md-block" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              BRYNEX APPARELS PRIVATE LIMITED
            </p>
            <p className="text-white mb-1 d-md-none" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              37/3688 A3, HARIKEERTHI COMPLEX,
            </p>
            <p className="text-white mb-1 d-none d-md-block" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              37/3688 A3, HARIKEERTHI COMPLEX,
            </p>
            <p className="text-white mb-1 d-md-none" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              Edapally, Ernakulam, Ernakulam-
            </p>
            <p className="text-white mb-1 d-none d-md-block" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              Edapally, Ernakulam, Ernakulam-
            </p>
            <p className="text-white mb-0 d-md-none" style={{ fontSize: '16px', lineHeight: '1.6' }}>
              682024, Kerala
            </p>
            <p className="text-white mb-0 d-none d-md-block" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              682024, Kerala
            </p>
          </Col>

          {/* Quick Links Column */}
          <Col xs={12} sm={6} md={3} className="d-flex flex-column text-center text-md-start mb-4 mb-md-0">
            <h6 className="text-white fw-bold text-uppercase mb-3 d-md-none" style={{ fontSize: '16px' }}>
              QUICK LINKS
            </h6>
            <h6 className="text-white fw-bold text-uppercase mb-3 d-none d-md-block" style={{ fontSize: '14px' }}>
              QUICK LINKS
            </h6>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-white text-decoration-none mb-2 d-md-none" style={{ fontSize: '16px' }}>
              Home
            </a>
            <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }} className="text-white text-decoration-none mb-2 d-none d-md-block" style={{ fontSize: '14px' }}>
              Home
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-white text-decoration-none mb-2 d-md-none" style={{ fontSize: '16px' }}>
              About
            </a>
            <a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }} className="text-white text-decoration-none mb-2 d-none d-md-block" style={{ fontSize: '14px' }}>
              About
            </a>
            <a href="#brand" onClick={(e) => { e.preventDefault(); scrollToSection('brand'); }} className="text-white text-decoration-none mb-2 d-md-none" style={{ fontSize: '16px' }}>
              Brands
            </a>
            <a href="#brand" onClick={(e) => { e.preventDefault(); scrollToSection('brand'); }} className="text-white text-decoration-none mb-2 d-none d-md-block" style={{ fontSize: '14px' }}>
              Brands
            </a>
            <a href="#careers" onClick={(e) => { e.preventDefault(); scrollToSection('careers'); }} className="text-white text-decoration-none mb-2 d-md-none" style={{ fontSize: '16px' }}>
              Careers
            </a>
            <a href="#careers" onClick={(e) => { e.preventDefault(); scrollToSection('careers'); }} className="text-white text-decoration-none mb-2 d-none d-md-block" style={{ fontSize: '14px' }}>
              Careers
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-white text-decoration-none mb-2 d-md-none" style={{ fontSize: '16px' }}>
              Contact
            </a>
            <a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }} className="text-white text-decoration-none mb-2 d-none d-md-block" style={{ fontSize: '14px' }}>
              Contact
            </a>
          </Col>

          {/* Join Our Team Column */}
          <Col xs={12} sm={6} md={3} className="d-flex flex-column text-center text-md-start mb-4 mb-md-0">
            <h6 className="text-white fw-bold text-uppercase mb-3 d-md-none" style={{ fontSize: '16px' }}>
              JOIN OUR TEAM
            </h6>
            <h6 className="text-white fw-bold text-uppercase mb-3 d-none d-md-block" style={{ fontSize: '14px' }}>
              JOIN OUR TEAM
            </h6>
            <p className="text-white mb-3 d-md-none" style={{ fontSize: '16px' }}>
              Looking for a job opportunity?
            </p>
            <p className="text-white mb-3 d-none d-md-block" style={{ fontSize: '14px' }}>
              Looking for a job opportunity?
            </p>
            <a 
              href="#careers" 
              onClick={handleCareersClick}
              className="text-decoration-none d-flex justify-content-center justify-content-md-start"
            >
              <Button
                className="d-flex align-items-center gap-2 border-white footer-btn-desktop"
                style={{ 
                  fontSize: '16px', 
                  padding: '10px 20px',
                  backgroundColor: '#171717',
                  borderRadius: '0',
                  color: '#fff',
                  width: 'fit-content'
                }}
              >
                See open positions <FaArrowRight />
              </Button>
            </a>
          </Col>
        </Row>

        {/* Bottom Section - Divider and Copyright */}
        <hr className="text-white my-3 my-md-4" style={{ opacity: '0.3' }} />
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start mb-2 mb-md-0">
            <p className="text-white mb-0 d-md-none" style={{ fontSize: '16px' }}>
              © 2025 Brynex Apparels Private Ltd.
            </p>
            <p className="text-white mb-0 d-none d-md-block" style={{ fontSize: '14px' }}>
              © 2025 Brynex Apparels Private Ltd.
            </p>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <p className="text-white mb-0 d-md-none" style={{ fontSize: '16px' }}>
              All right reserved.
            </p>
            <p className="text-white mb-0 d-none d-md-block" style={{ fontSize: '14px' }}>
              All right reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

   