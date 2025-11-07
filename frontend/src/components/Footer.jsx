import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedinIn, FaInstagram, FaArrowRight } from 'react-icons/fa'

const Footer = () => {
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
              <Link to=""><FaFacebook className="text-white" style={{ fontSize: '22px' }} /></Link>
              <Link to="https://www.linkedin.com/company/brynex-apparels/posts/?feedView=all"><FaLinkedinIn className="text-white" style={{ fontSize: '22px' }} /></Link>
              <Link to="https://www.instagram.com/suitorguy_?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=all"><FaInstagram className="text-white" style={{ fontSize: '22px' }} /></Link>
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
            <Link to="/" className="text-white text-decoration-none mb-2 d-md-none" style={{ fontSize: '16px' }}>
              Home
            </Link>
            <Link to="/" className="text-white text-decoration-none mb-2 d-none d-md-block" style={{ fontSize: '14px' }}>
              Home
            </Link>
            <Link to="/about" className="text-white text-decoration-none mb-2 d-md-none" style={{ fontSize: '16px' }}>
              About
            </Link>
            <Link to="/about" className="text-white text-decoration-none mb-2 d-none d-md-block" style={{ fontSize: '14px' }}>
              About
            </Link>
            <Link to="/brand" className="text-white text-decoration-none mb-2 d-md-none" style={{ fontSize: '16px' }}>
              Brands
            </Link>
            <Link to="/brand" className="text-white text-decoration-none mb-2 d-none d-md-block" style={{ fontSize: '14px' }}>
              Brands
            </Link>
            <Link to="/technology" className="text-white text-decoration-none mb-2 d-md-none" style={{ fontSize: '16px' }}>
              Technology
            </Link>
            <Link to="/technology" className="text-white text-decoration-none mb-2 d-none d-md-block" style={{ fontSize: '14px' }}>
              Technology
            </Link>
            <Link to="/contact" className="text-white text-decoration-none mb-2 d-md-none" style={{ fontSize: '16px' }}>
              Contact
            </Link>
            <Link to="/contact" className="text-white text-decoration-none mb-2 d-none d-md-block" style={{ fontSize: '14px' }}>
              Contact
            </Link>
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
            <Link to="/careers" className="text-decoration-none d-flex justify-content-center justify-content-md-start">
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
            </Link>
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

   