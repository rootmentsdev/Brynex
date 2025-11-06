import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaFacebook, FaLinkedinIn, FaInstagram, FaArrowRight } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#171717' ,width
: '100%'
    }}>
      <Container className="py-5">
        {/* Top Section - Four Columns */}
        <Row className="g-4">
          {/* Social Media Icons Column */}
          <Col xs={12} sm={6} md={3} className="d-flex align-items-start">
            <div className="d-flex gap-3">
              <FaFacebook className="text-white" style={{ fontSize: '20px' }} />
              <FaLinkedinIn className="text-white" style={{ fontSize: '20px' }} />
              <FaInstagram className="text-white" style={{ fontSize: '20px' }} />
            </div>
          </Col>

          {/* Office Address Column */}
          <Col xs={12} sm={6} md={3} className="d-flex flex-column">
            <h6 className="text-white fw-bold text-uppercase mb-3" style={{ fontSize: '14px' }}>
              OFFICE ADDRESS
            </h6>
            <p className="text-white mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              BRYNEX APPARELS PRIVATE LIMITED
            </p>
            <p className="text-white mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              37/3688 A3, HARIKEERTHI COMPLEX,
            </p>
            <p className="text-white mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              Edapally, Ernakulam, Ernakulam-
            </p>
            <p className="text-white mb-0" style={{ fontSize: '14px', lineHeight: '1.6' }}>
              682024, Kerala
            </p>
          </Col>

          {/* Quick Links Column */}
          <Col xs={12} sm={6} md={3} className="d-flex flex-column">
            <h6 className="text-white fw-bold text-uppercase mb-3" style={{ fontSize: '14px' }}>
              QUICK LINKS
            </h6>
            <Link to="/" className="text-white text-decoration-none mb-2" style={{ fontSize: '14px' }}>
              Home
            </Link>
            <Link to="/about" className="text-white text-decoration-none mb-2" style={{ fontSize: '14px' }}>
              About
            </Link>
            <Link to="/brand" className="text-white text-decoration-none mb-2" style={{ fontSize: '14px' }}>
              Brands
            </Link>
            <Link to="/technology" className="text-white text-decoration-none mb-2" style={{ fontSize: '14px' }}>
              Technology
            </Link>
            <Link to="/contact" className="text-white text-decoration-none mb-2" style={{ fontSize: '14px' }}>
              Contact
            </Link>
          </Col>

          {/* Join Our Team Column */}
          <Col xs={12} sm={6} md={3} className="d-flex flex-column">
            <h6 className="text-white fw-bold text-uppercase mb-3" style={{ fontSize: '14px' }}>
              JOIN OUR TEAM
            </h6>
            <p className="text-white mb-3" style={{ fontSize: '14px' }}>
              Looking for a job opportunity?
            </p>
            <Link to="/careers" className="text-decoration-none">
              <Button
                className="d-flex align-items-center gap-2 rounded"
                style={{ 
                  fontSize: '14px', 
                  padding: '8px 16px',
                  backgroundColor: '#171717',
                  border: '1px solid rgba(255, 255, 255, 0.5)',
                  color: '#fff'
                }}
              >
                See open positions <FaArrowRight />
              </Button>
            </Link>
          </Col>
        </Row>

        {/* Bottom Section - Divider and Copyright */}
        <hr className="text-white my-4" style={{ opacity: '0.3' }} />
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-start mb-2 mb-md-0">
            <p className="text-white mb-0" style={{ fontSize: '14px' }}>
              © 2025 Brynex Apparels Private Ltd.
            </p>
          </Col>
          <Col xs={12} md={6} className="text-end">
            <p className="text-white mb-0" style={{ fontSize: '14px' }}>
              All right reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

   