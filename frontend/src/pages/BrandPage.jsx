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
                          max-width: 300px;
                          margin-top: 5px;
                        }
                      }`
                }
            </style>
      {/* Title Section */}
      <div className="mx-3 ms-md-5 mt-4" >
        <p className="text-dark" style={{ fontSize: "16px", opacity: "0.6" }}>//Brands</p>
        <h1 className="mb-3 text-dark fw-normal" style={{ fontSize: "48px" }}>
          Explore Our <br />
          Premium Brands
        </h1>
      </div>

      {/* Description Section */}
      <div className="mx-3 ms-md-5">
        <p className="text-dark d-none d-md-block" style={{ fontSize: "14px", opacity: "0.6", lineHeight: "20px",alignContent:"justify" }}>
          Building the future of fashion Brynex Apparels is home to Kerala's most recognized fashion rental and retail brands through innovation and excellence
        </p>
        <p className="text-dark d-md-none" style={{ fontSize: "16px", opacity: "0.6", lineHeight: "20px" ,alignContent:"justify"}}>
          Building the future of fashion Brynex Apparels is home to Kerala's most recognized fashion rental and retail brands through innovation and excellence
        </p>
        <hr className='mt-4' style={{ marginLeft: 0, marginRight: 0 }} />
      </div>


      {/* Suitor Guy Section */}
      <div className="mx-3 ms-md-5  mb-4">
        <Row className="mt-4 align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <h3 className=" d-md-none" style={{ fontSize: "28px", color: "#171717" }}>Suitor Guy</h3>
            <h3 className="  d-none d-md-block" style={{ fontSize: "40px" , color: "#171717"}}>Suitor Guy</h3>
            <p className=" fst-italic d-md-none" style={{ fontSize: "18px", color: "#171717" }}>Be the man they remember.</p>
            <p className=" fst-italic d-none d-md-block" style={{ fontSize: "24px", color: "#171717"  }}>Be the man they remember.</p>
            <p className=" mt-1" style={{ fontSize: "14px", opacity: "0.6",color: "#171717" ,alignContent:"justify"}}>  
              Premium men's wedding rental and fashion brand offering  suits, tuxedos, and accessories
            </p>
            <div  style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Button  className=' pt-2 pb-2 mb-4  w-md-auto mt-1 d-flex align-items-center justify-content-center  submit-btn-desktop' style={{
                    width: 200,
                  
                    borderRadius: 0,
                    backgroundColor: '#000',
                    border: 'none',

                }}> <Link to="https://suitorguy.com/" className='text-white text-decoration-none'>Visit Website<span className='ms-1'><FaArrowRight /></span></Link></Button>

            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src={Brand} alt="Suitor Guy" fluid className="w-100" />

          </Col>
        </Row>
      </div>


      {/* Zorucci Section */}
      <div className="mx-3 ms-md-5">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0 order-2 order-md-1">
            <Image src={Brand2} alt="Zorucci" fluid className="w-100" />
          </Col>
          <Col xs={12} md={6} className="order-1 order-md-2">
            <h3 className="  d-md-none" style={{ fontSize: "28px" ,color: "#171717"}}>Zorucci</h3>
            <h3 className="  d-none d-md-block" style={{ fontSize: "40px",color: "#171717" }}>Zorucci</h3>
            <p className="fst-italic d-md-none" style={{ fontSize: "18px",color: "#171717" }}>Elegance, made effortless.</p>
            <p className="fst-italic d-none d-md-block" style={{ fontSize: "24px",color: "#171717" }}>Elegance, made effortless.</p>
            <p className="mt-1" style={{ fontSize: "14px", opacity: "0.6",color: "#171717",alignContent:"justify" }}>
              Kerala's refined bridal and women's wear destination, featuring bridal gowns, partywear, jewelry, and accessories.
            </p>
            <div  style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Button  className='   mb-4 pt-2 pb-2 w-md-auto mt-1 d-flex align-items-center justify-content-center  submit-btn-desktop' style={{
                    width: 200,
                  
                    borderRadius: 0,
                    backgroundColor: '#000',
                    border: 'none',
                   
                }}> <Link to="/brand" className='text-white text-decoration-none'>Visit Website<span className='ms-1'><FaArrowRight /></span></Link></Button>
               
            </div>
          </Col>
        </Row>
      </div>

      {/* Dappr Squad Section */}
      <div className="mx-3 ms-md-5 mb-4">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <h3 className="  d-md-none" style={{ fontSize: "28px" ,color:"#171717"}}>Dappr Squad</h3>
            <h3 className="  d-none d-md-block" style={{ fontSize: "40px" ,color:"#171717"}}>Dappr Squad</h3>
            <p className="fst-italic d-md-none" style={{ fontSize: "18px" ,color:"#171717"}}>For the groom's crew, done right.</p>
            <p className="fst-italic d-none d-md-block" style={{ fontSize: "24px" ,color:"#171717"}}>For the groom's crew, done right.</p>
            <p className="mt-1" style={{ fontSize: "14px", opacity: "0.6" ,color:"#171717",alignContent:"justify"}}>
              Premium men's wedding rental and fashion brand offering suits,  tuxedos, and accessories
            </p>
            <div  style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <Button  className=' mb-4 pt-2 pb-2 w-md-auto mt-1 d-flex align-items-center justify-content-center  submit-btn-desktop' style={{
                    width: 200,
                  
                    borderRadius: 0,
                    backgroundColor: '#000',
                    border: 'none',
                   
                }}> <Link to="https://www.dapprsquad.com/" className='text-white text-decoration-none'>Visit Website<span className='ms-1'><FaArrowRight /></span></Link></Button>
               
            </div>
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
