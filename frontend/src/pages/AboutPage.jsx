import React from 'react'
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import { RxDividerVertical } from 'react-icons/rx';


const AboutPage = () => {
  return (
    <Container>
      <div className='mx-3 ms-md-5 mt-4 '>
        <div >
          <p style={{fontSize:"16px",opacity:"0.6",color:"#171717"}}>//About</p>
          <h1 className='about-hero-title '
         style={{
            fontSize: "48px", fontWeight: "500",
          
            color: '#171717',
            lineHeight: "1.2"
          }}>
            <span className='about-hero-line'>Where Fashion</span>
            <span className='about-hero-line'>Meets Systems</span>
          </h1>
        </div>
      </div>
    <div style={{ marginTop: "20px" }} className="mx-3 ms-md-5 mb-5 pb-5">
      <Row style={{ color: "#171717" }} className="align-items-center">
        
        {/* Left Column */}
        <Col md={7} className="mb-4" style={{ color: "#171717"}}>
          <p className='d-none d-md-block'  style={{
                    fontSize: "16px",
                  
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                    marginBottom: "10px",
                  }}>
            Brynex Apparels was founded with a mission to organize and modernize
            the Indian fashion rental and retail industry.
            <br  />
            <span className='d-none d-md-block'  style={{
                    fontSize: "16px",
                   
                    
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                  }}>
              Starting as a single store, we have grown into a parent organization
              managing men's fashion, bridal wear, jewelry, and tech solutions —
              all designed to create a seamless ecosystem for scale and performance.
            </span>
          </p>
          <p className='d-md-none' style={{
                    fontSize: "16px",
                    
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                    marginBottom: "16px",
                  }}>
            Brynex Apparels was founded with a mission to organize and modernize
            the Indian fashion rental and retail industry.
           <span className='d-md-none' style={{
                    fontSize: "16px",
                   
                    
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "16px",
                    display: "block",
                  }}>
              Starting as a single store, we have grown into a parent organization
              managing men's fashion, bridal wear, jewelry, and tech solutions —
              all designed to create a seamless ecosystem for scale and performance.
           </span>
          </p>
        </Col>

        {/* Center Divider Icon */}
        <Col xs="auto" className="d-none d-md-flex justify-content-center mb-3">
          <RxDividerVertical size={60} color="#D9D9D9" className='mb-4 ' style={{ opacity: 0.3, transform: "scaleY(2)" }} />
        </Col>

        {/* Right Column */}
        
          <Col md={4}  style={{ color: "#171717",marginTop:"-40px" }}>
            <h3 style={{fontSize:"28px"}} className="mb-3 mt-4">Our Vision</h3>
            <p className='d-none d-md-block'  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                  }}>     
              To create a world where fashion and technology move in sync —     
              beautifully and efficiently.
            </p>
            <p className='d-md-none'  style={{
                    fontSize: "16px",
                    color: "#171717",
                    opacity: "0.6",
                    textAlign: "justify",
                    lineHeight: "1.6",
                    marginTop: "6px",
                  }}>
              To create a world where fashion and technology move in sync —     
              beautifully and efficiently.
            </p>
          </Col>
        
      </Row>
      <hr className='mt-3' />
    </div>


    {/* Our Pillars */}

    <div style={{marginTop:"-75px"}} className=' mx-3 ms-md-5 mb-4 ' >       
         <h3 className='mb-5' style={{
          fontSize:"42px",
          color: "#171717"
         }} >Our Core Pillars</h3>
                    <Row style={{
                      color: "#171717"
                    }} className="g-3 g-md-0">
                        <Col xs={6} md={3} className="mb-3 mb-md-0">
                            <h5 style={{
                                fontSize:"24px",
                                color: "#171717",
                                marginBottom: "8px"
                            }}>
                                Retail Excellence
                            </h5>
                            <span className="fw-normal d-block" style={{ fontSize: '16px', color: '#171717', opacity: "0.6" }}>
                                Employees
                            </span>
                        </Col>
                        <Col xs={6} md={3} className="mb-3 mb-md-0">
                            <h5 style={{
                                fontSize:"24px",
                                color: "#171717",
                                marginBottom: "8px"
                            }}>
                                Tech Innovation
                            </h5>
                            <span className="fw-normal d-block" style={{ fontSize: '16px', color: '#171717', opacity: "0.6" }}>
                                Fashion & Rental Brands
                            </span>
                        </Col>
                        <Col xs={6} md={3} className="mb-3 mb-md-0">
                            <h5 style={{
                                fontSize:"24px",
                                color: "#171717",
                                marginBottom: "8px"
                            }}>
                                People & Culture
                            </h5>
                            <span className="fw-normal d-block" style={{ fontSize: '16px', color: '#171717', opacity: "0.6" }}>
                                Proprietary Software Platforms
                            </span>
                        </Col>
                        <Col xs={6} md={3} className="mb-3 mb-md-0">
                            <h5 style={{
                                fontSize:"24px",
                                color: "#171717",
                                marginBottom: "8px"
                            }}>
                                Customer Excellence
                            </h5>
                            <span className="fw-normal d-block" style={{ fontSize: '16px', color: '#171717', opacity: "0.6" }}>
                                Stores Across Kerala
                            </span>
                        </Col>
                    </Row>


                    
                </div>

    {/* Leadership Section */}
    <hr className='mx-3 ms-md-5 mt-5' />
    <div className='mx-3 ms-md-5 mt-5'>
      <div>
        <p style={{ fontSize: "16px", opacity: "60%", color: "#171717" }}></p>
        <h1
          className="mb-4"
          style={{
            fontSize: "40px",
            fontWeight: "500",
            color: "#171717",
            marginBottom: "5px",
            lineHeight: "1.2"
          }}
        >
          <span className='d-block'>Our</span>
          <span className='d-block'>Leaders</span>
        </h1>
        <p className="d-none d-md-block" style={{
          fontSize: "16px",
          lineHeight: "20px",
          color: '#171717', opacity: "60%"
        }}>Leading Brynex towards a future of innovation and excellence</p>
        <p className="d-md-none" style={{
          fontSize: "16px",
          lineHeight: "20px",
          color: '#171717', opacity: "60%"
        }}>Leading Brynex towards a future of innovation and excellence</p>
      </div>
    </div>
    <hr className='mx-3 ms-md-5 mt-4' />

    {/* Leadership Section */}
    <div className='mx-3 ms-md-5 mt-4 pb-5'>
      <Row className="d-flex flex-column flex-md-row justify-content-between align-items-start">
        {/* First Director */}
        <Col xs={12} md={6} className="mb-4 mb-md-0 pe-md-4">
          <h3 style={{
            fontSize: "28px",
            fontWeight: "500",
            color: "#171717",
            marginBottom: "8px"
          }}>
            Farok Riyas Alungal
          </h3>
          <p style={{
            fontSize: "16px",
            color: "#171717",
            opacity: "0.6",
            marginBottom: "16px"
          }}>
            DIRECTOR
          </p>
          <div className="d-flex align-items-start">
            <div style={{
              width: "2px",
              backgroundColor: "#171717",
              marginRight: "12px",
              alignSelf: "stretch",
              minHeight: "60px"
            }}></div>
            <p style={{
              fontSize: "16px",
              color: "#171717",
              opacity: "0.6",
              lineHeight: "1.6",
              margin: 0
            }}>
              "Driving innovation, structure, and growth across every brand under Brynex."
            </p>
          </div>
        </Col>
       
        {/* Second Director */}
        <Col xs={12} md={6} className="ps-md-4">
          <h3 style={{
            fontSize: "28px",
            fontWeight: "500",
            color: "#171717",
            marginBottom: "8px"
          }}>
            Kalathilparambil Sakariya Siyas
          </h3>
          <p style={{
            fontSize: "16px",
            color: "#171717",
            opacity: "0.6",
            marginBottom: "16px"
          }}>
            DIRECTOR
          </p>
          <div className="d-flex align-items-start">
            <div style={{
              width: "2px",
              backgroundColor: "#171717",
              marginRight: "12px",
              alignSelf: "stretch",
              minHeight: "60px"
            }}></div>
            <p style={{
              fontSize: "16px",
              color: "#171717",
              opacity: "0.6",
              lineHeight: "1.6",
              margin: 0
            }}>
              "Building a culture where performance, creativity, and excellence meet."
            </p>
          </div>
        </Col>
      </Row>
    </div>

    </Container>
  )
}

export default AboutPage
