import React from 'react'
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { RxDividerVertical } from 'react-icons/rx';


const AboutPage = () => {
  return (
    <Container>
      <div className='mx-3 ms-md-5 mt-4 '>
        <div >
          <p style={{fontSize:"16px",opacity:"0.6",color:"#171717"}}>//About Brynex</p>
          <h1 className=' mb-4 ' style={{
            fontSize: "48px", fontWeight: "500",
            marginBottom: '5px',
            color: '#171717'
          }}>Where Fashion Meets <br /> Systems</h1>
        </div>
      </div>
    <div style={{ marginTop: "30px" }} className="mx-3 ms-md-5 mb-5 pb-5">
      <Row style={{ color: "#171717" }} className="align-items-center">
        
        {/* Left Column */}
        <Col md={7} className="mb-4" style={{ color: "#171717", opacity: "0.6" }}>
          <p className='' style={{ fontSize: "14px" }}>
            Brynex Apparels was founded with a mission to organize and modernize
            the Indian fashion rental and retail industry.
            <br />
            Starting as a single store, we have grown into a parent organization
            managing men's fashion, bridal wear, jewelry, and tech solutions —
            all designed to create a seamless ecosystem for scale and performance.
          </p>
        </Col>

        {/* Center Divider Icon */}
        <Col xs="auto" className="d-none d-md-flex justify-content-center mb-3">
          <RxDividerVertical size={60} color="#D9D9D9" className='mb-4 ' style={{ opacity: 0.3, transform: "scaleY(2)" }} />
        </Col>

        {/* Right Column */}
        
          <Col md={4}  style={{ color: "#171717",marginTop:"-40px" }}>
            <h3 style={{fontSize:"28px"}} className="mb-3 mt-4">Our Vision</h3>
            <p className='' style={{ color: "#171717", opacity: "0.6" }}>     
              To create a world where fashion and technology move in sync —     
              beautifully and efficiently.
            </p>
          </Col>
        
      </Row>
      <hr className='mt-3' />
    </div>


    {/* Our Pillars */}

    <div style={{marginTop:"-100px"}} className=' mx-3 ms-md-5' >       
         <h3 className='mb-5' style={{
          fontSize:"42px",
         
         }} >Our Core Pillers</h3>
                    <Row style={{
                      color: "#171717"
                    }} className="d-flex justify-content-between align-items-center">
                        <Col xs={6} md={3} className="mb-3 mb-md-0 ">
                            <h5 style={{
                                fontSize:"24px",
                                color: "#171717"
                            }} className="">
                                Retail Excellence<br />
                                <span className="fw-normal" style={{ fontSize: '14px', color: '#171717', opacity: "60%" }}>
                                    Employees
                                </span>
                            </h5>
                        </Col>
                        <Col xs={6} md={3} className="mb-3 mb-md-0">
                            <h5 style={{
                                fontSize:"24px",
                                color: "#171717"
                            }} className="">
                                Tech Innovation<br />
                                <span className="fw-normal" style={{ fontSize: '14px', color: '#171717', opacity: "60%" }}>
                                    Fashion & Rental Brands
                                </span>
                            </h5>
                        </Col>
                        <Col xs={6} md={3} className="mb-3 mb-md-0">
                            <h5 style={{
                                fontSize:"24px",
                                color: "#171717"
                            }} className="">
                                People & Culture<br />
                                <span className="fw-normal" style={{ fontSize: '14px', color: '#171717', opacity: "60%" }}>
                                    Proprietary Software Platforms
                                </span>
                            </h5>
                        </Col>
                        <Col xs={6} md={3}>
                            <h5 style={{
                                fontSize:"24px",
                                color: "#171717"
                            }} className="">
                            Customer Excellence <br />
                                <span className="fw-normal" style={{ fontSize: '14px', color: '#171717', opacity: "60%" }}>
                                    Stores Across Kerala
                                </span>
                            </h5>
                        </Col>
                    </Row>


                    
                </div>

    </Container>
  )
}

export default AboutPage
