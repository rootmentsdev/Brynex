import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Brand from '../assets/Brand.jpg';
import Brand2 from '../assets/Brand2.png';  
import Brand3 from '../assets/Brand3.png';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const BrandPage = () => {
  return (
    <Container>
       <style>
                {
                   ` @media (min-width: 768px) {
                        .submit-btn-desktop {
                          width: 191px !important;
                          height: 48px !important;
                          padding: 16px 20px !important;
                          margin-top: 5px;
                        }
                        .brand-button-container {
                          gap: 12px;
                        }
                      }`
                }
            </style>
      {/* Title Section */}
      <div className="mx-3 ms-md-5 mt-4 mb-4" >
        <p className="text-dark mb-2" style={{ fontSize: "16px", opacity: "0.6" }}>//Brands</p>
        <h1 className="mb-3 text-dark fw-normal" style={{ fontSize: "48px", lineHeight: "1.2" }}>
          <span className='d-block'>Explore Our</span>
          <span className='d-block'>Premium Brands</span>
        </h1>
      </div>

      {/* Description Section */}
      <div className="mx-3 ms-md-5 mb-4 mb-md-5">
        <p className="text-dark d-none d-md-block mb-0"  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                  }}>
          Building the future of fashion Brynex Apparels is home to Kerala's most recognized fashion rental and retail brands through innovation and excellence
        </p>
        <p className="text-dark d-md-none mb-0"  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                  }}>
          Building the future of fashion Brynex Apparels is home to Kerala's most recognized fashion rental and retail brands through innovation and excellence
        </p>
        <hr className='mt-4 mb mt-md-5 mb-0' />
      </div>


      {/* Suitor Guy Section */}
      <div className="mx-3  ms-md-5 mb-5 mb-md-5">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0 order-1 order-md-2 mt-2">
            <Image src={Brand} alt="Suitor Guy" fluid className="w-100" />
          </Col>
          <Col xs={12} md={6} className="order-2 order-md-1">
            <h3 className="d-md-none mb-2" style={{ fontSize: "28px", color: "#171717", fontWeight: "500" }}>Suitor Guy</h3>
            <h3 className="d-none d-md-block mb-3" style={{ fontSize: "40px", color: "#171717", fontWeight: "500" }}>Suitor Guy</h3>
            <p className="fst-italic d-md-none mb-2" style={{ fontSize: "18px", color: "#171717" }}>Be the man they remember.</p>
            <p className="fst-italic d-none d-md-block mb-3" style={{ fontSize: "24px", color: "#171717" }}>Be the man they remember.</p>
            <p className="mb-4"  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                  }}>  
              Premium men's wedding rental and fashion brand offering suits, tuxedos, and accessories
            </p>
            <div className="brand-button-container" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Button className='w-100 pt-3 pb-3 mb-0 w-md-auto d-flex align-items-center justify-content-center submit-btn-desktop' style={{
                borderRadius: 0,
                backgroundColor: '#171717',
                border: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#333';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#171717';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              > 
                <Link style={{fontSize:"15px"}} to="https://suitorguy.com/" className='text-white text-decoration-none'>Visit Website<span className='ms-2'><FaArrowRight /></span></Link>
              </Button>
            </div>
          </Col>
        </Row>
      </div>


      {/* Zorucci Section */}
      <div className="mx-3 ms-md-5 mb-5 mb-md-5">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0 order-1 order-md-1">
            <Image src={Brand2} alt="Zorucci" fluid className="w-100" />
          </Col>
          <Col xs={12} md={6} className="order-2 order-md-2">
            <h3 className="d-md-none mb-2" style={{ fontSize: "28px", color: "#171717", fontWeight: "500" }}>Zorucci</h3>
            <h3 className="d-none d-md-block mb-3" style={{ fontSize: "40px", color: "#171717", fontWeight: "500" }}>Zorucci</h3>
            <p className="fst-italic d-md-none mb-2" style={{ fontSize: "18px", color: "#171717" }}>Elegance, made effortless.</p>
            <p className="fst-italic d-none d-md-block mb-3" style={{ fontSize: "24px", color: "#171717" }}>Elegance, made effortless.</p>
            <p className="mb-4"  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                  }}>
              Kerala's refined bridal and women's wear destination, featuring bridal gowns, partywear, jewelry, and accessories.
            </p>
            <div className="brand-button-container" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Button className='w-100 pt-3 pb-3 mb-0 w-md-auto d-flex align-items-center justify-content-center submit-btn-desktop' style={{
                borderRadius: 0,
                backgroundColor: '#171717',
                border: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#333';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#171717';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              > 
                <Link to="/brand" style={{fontSize:"15px"}} className='text-white text-decoration-none'>Visit Website<span className='ms-2'><FaArrowRight /></span></Link>
              </Button>
            </div>
          </Col>
        </Row>
      </div>

      {/* Dappr Squad Section */}
      <div className="mx-3 ms-md-5 mb-3 mb-md-4 pb-2 pb-md-4">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0 order-1 order-md-2">
            <Image src={Brand3} alt="Dappr Squad" fluid className="w-100" />
          </Col>
          <Col xs={12} md={6} className="order-2 order-md-1">
            <h3 className="d-md-none mb-2" style={{ fontSize: "28px", color: "#171717", fontWeight: "500" }}>Dappr Squad</h3>
            <h3 className="d-none d-md-block mb-3" style={{ fontSize: "40px", color: "#171717", fontWeight: "500" }}>Dappr Squad</h3>
            <p className="fst-italic d-md-none mb-2" style={{ fontSize: "18px", color: "#171717" }}>For the groom's crew, done right.</p>
            <p className="fst-italic d-none d-md-block mb-3" style={{ fontSize: "24px", color: "#171717" }}>For the groom's crew, done right.</p>
            <p className="mb-4"  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                  }}>
              Premium men's wedding rental and fashion brand offering suits, tuxedos, and accessories
            </p>
            <div className="brand-button-container" style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              <Button className='w-100 pt-3 pb-3 mb-0 w-md-auto d-flex align-items-center justify-content-center submit-btn-desktop' style={{
                borderRadius: 0,
                backgroundColor: '#171717',
                border: 'none',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#333';
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#171717';
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
              > 
                <Link style={{fontSize:"15px"}} to="https://www.dapprsquad.com/" className='text-white text-decoration-none'>Visit Website<span className='ms-2'><FaArrowRight /></span></Link>
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default BrandPage;
