import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Brand from '../assets/Brand.jpg';
import Brand2 from '../assets/Brand2.png';  
import Brand3 from '../assets/Brand3.png';  

const BrandPage = () => {
  return (
    <Container>
      {/* Title Section */}
      <div className="mx-3 ms-md-5" style={{ marginTop: "80px" }}>
        <p className="text-dark" style={{ fontSize: "16px", opacity: "0.6" }}>//Brands</p>
        <h1 className="mb-3 text-dark fw-normal" style={{ fontSize: "48px" }}>
          Explore Our <br />
          Premium Brands
        </h1>
      </div>

      {/* Description Section */}
      <div className="mx-3 ms-md-5">
        <p className="text-dark" style={{ fontSize: "14px", opacity: "0.6", lineHeight: "20px" }}>
          Building the future of fashion Brynex Apparels is home to Kerala's most recognized fashion rental and retail brands through innovation and excellence
        </p>
        <hr className='mt-5' />
      </div>


      {/* Suitor Guy Section */}
      <div className="mx-3 ms-md-5 mt-5 mb-5 pb-5">
        <Row className="mt-5 align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <h3 className="text-dark fw-normal d-md-none" style={{ fontSize: "28px" }}>Suitor Guy</h3>
            <h3 className="text-dark fw-normal d-none d-md-block" style={{ fontSize: "40px" }}>Suitor Guy</h3>
            <p className="text-dark fst-italic d-md-none" style={{ fontSize: "18px" }}>Be the man they remember.</p>
            <p className="text-dark fst-italic d-none d-md-block" style={{ fontSize: "24px" }}>Be the man they remember.</p>
            <p className="text-dark mt-1" style={{ fontSize: "14px", opacity: "0.6" }}>
              Premium men's wedding rental and fashion brand offering suits, tuxedos, and accessories
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Image src={Brand} alt="Suitor Guy" fluid className="w-100" />
          </Col>
        </Row>
      </div>


      {/* Zorucci Section */}
      <div className="mx-3 ms-md-5 mt-5 mb-5 pb-5">
        <Row className="mt-5 align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0 order-2 order-md-1">
            <Image src={Brand2} alt="Zorucci" fluid className="w-100" />
          </Col>
          <Col xs={12} md={6} className="order-1 order-md-2">
            <h3 className="text-dark fw-normal d-md-none" style={{ fontSize: "28px" }}>Zorucci</h3>
            <h3 className="text-dark fw-normal d-none d-md-block" style={{ fontSize: "40px" }}>Zorucci</h3>
            <p className="text-dark fst-italic d-md-none" style={{ fontSize: "18px" }}>Elegance, made effortless.</p>
            <p className="text-dark fst-italic d-none d-md-block" style={{ fontSize: "24px" }}>Elegance, made effortless.</p>
            <p className="text-dark mt-1" style={{ fontSize: "14px", opacity: "0.6" }}>
              Kerala's refined bridal and women's wear destination, featuring bridal gowns, partywear, jewelry, and accessories.
            </p>
          </Col>
        </Row>
      </div>

      {/* Dappr Squad Section */}
      <div className="mx-3 ms-md-5 mt-5 mb-5 pb-5">
        <Row className="mt-5 align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <h3 className="text-dark fw-normal d-md-none" style={{ fontSize: "28px" }}>Dappr Squad</h3>
            <h3 className="text-dark fw-normal d-none d-md-block" style={{ fontSize: "40px" }}>Dappr Squad</h3>
            <p className="text-dark fst-italic d-md-none" style={{ fontSize: "18px" }}>For the groom's crew, done right.</p>
            <p className="text-dark fst-italic d-none d-md-block" style={{ fontSize: "24px" }}>For the groom's crew, done right.</p>
            <p className="text-dark mt-1" style={{ fontSize: "14px", opacity: "0.6" }}>
              Premium men's wedding rental and fashion brand offering suits, tuxedos, and accessories
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Image src={Brand3} alt="Dappr Squad" fluid className="w-100" />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default BrandPage;
