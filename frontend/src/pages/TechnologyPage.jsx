import React from 'react'
import { Container } from 'react-bootstrap';
import { Row, Col, Image } from 'react-bootstrap';
import Home from '../assets/Home.jpg';
import { FaArrowUp } from 'react-icons/fa';
const TechnologyPage = () => {
  return (
    <>
      <style>{`
        @media (min-width: 768px) {
          .platforms-row {
            gap: 40px !important;
          }
          .platforms-row .col {
            padding-bottom: 50px !important;
          }
        }
      `}</style>
    <Container>
      <div className='mx-3 ms-md-5 mt-5'>
        <div style={{ marginTop: '80px' }}>
          <p style={{ fontSize: "16px", opacity: "60%", color: "#171717" }}>//Technology</p>
          <h1
            className="mb-4"
            style={{
              fontSize: "48px",
              fontWeight: "500",
              color: "#171717",
              marginBottom: "5px"
            }}
          >
            Innovation Woven
            <br />
            Into Every Thread
          </h1>
          <p style={{
            fontSize: "14px",
            lineHeight: "20px",
            color: '#171717', opacity: "60%"
          }}>Building India's first fully integrated fashion-tech ecosystem</p>
        </div>
      </div>


      <div  className='my-5 py-5 mb-5 mx-3 ms-md-5'>
         <Row className='d-flex justify-between mt-5'>


          <Col md={6}>
                                    <Image style={{
                                        width: 534,
                                        height: 300,
        
                                    }} src={Home} alt="Employees Section" fluid />
                                </Col>
                               
                                <Col md={6} className='d-flex flex-column justify-content-center mb-5 mt-4  '>
                                    <h3 style={{ fontSize: "40px", color: '#171717' }}  >Scalability Through  <br /> Systemization</h3>
                                    <p style={{ fontSize: '14px', lineHeight: '20px', color: '#171717', opacity: "60%",alignContent:
                                      'justify' }}>
                                        Building the future of fashion Brynex Apparels is home to Kerala's most recognized At Brynex Apparels, we believe scalability in retail comes from systemization. Our in-house tech division develops software that automates every layer from daily operations to financial reporting and training.</p>

                                        <p style={{ fontSize: '14px', lineHeight: '20px', color: '#171717', opacity: "60%",alignContent:
                                      'justify' }}>Our vision is to build India's first fully integrated fashion-tech ecosystem powered by data, design, and discipline. Fashion rental and retail brands thrive through innovation and excellence.
                                    </p>
                                </Col>
                                 
                            </Row>
      </div>





     <div  className='mb-5 pb-5 mx-3 ms-md-5' style={{marginTop: '0px'}}>       
           <h3 className='mb-4' style={{
            fontSize:"42px",
            marginTop: '-50px'
           }} >Our In-House Platforms</h3>
                      {/* Single Row */}
                      <Row className="d-flex flex-column flex-md-row justify-content-between align-items-start platforms-row" style={{
                        color: "#171717",
                        gap: '15px'
                      }}>                                                                         
                          <Col xs={12} md={3} className="mb-4 mb-md-0" style={{paddingBottom: '30px'}}>        
                              <FaArrowUp className="d-md-none" style={{ fontSize: '14px', color: '#171717', marginBottom: '8px' }} />
                              <FaArrowUp className="d-none d-md-block" style={{ fontSize: '16px', color: '#171717', marginBottom: '8px' }} />
                              <h5 className="d-md-none" style={{ fontSize:"20px", color: "#171717" }}>
                                  Rootfin<br />
                                  <span className="fw-normal" style={{ fontSize: '13px', color: '#171717', opacity: "60%" }}>                                   
                                     Financial management & daily closing system
                                  </span>
                              </h5>
                              <h5 className="d-none d-md-block" style={{ fontSize:"24px", color: "#171717" }}>
                                  Rootfin<br />
                                  <span className="fw-normal" style={{ fontSize: '14px', color: '#171717', opacity: "60%" }}>                                   
                                     Financial management & daily closing system
                                  </span>
                              </h5>
                          </Col>
                          <Col xs={12} md={3} className="mb-4 mb-md-0" style={{paddingBottom: '30px'}}>
                              <FaArrowUp className="d-md-none" style={{ fontSize: '14px', color: '#171717', marginBottom: '8px' }} />
                              <FaArrowUp className="d-none d-md-block" style={{ fontSize: '16px', color: '#171717', marginBottom: '8px' }} />
                              <h5 className="d-md-none" style={{ fontSize:"20px", color: "#171717" }}>
                                  RootLMS<br />
                                  <span className="fw-normal" style={{ fontSize: '13px', color: '#171717', opacity: "60%" }}>                                   
                                    Learning and performance management system  
                                  </span>
                              </h5>
                              <h5 className="d-none d-md-block" style={{ fontSize:"24px", color: "#171717" }}>
                                  RootLMS<br />
                                  <span className="fw-normal" style={{ fontSize: '14px', color: '#171717', opacity: "60%" }}>                                   
                                    Learning and performance management system  
                                  </span>
                              </h5>
                          </Col>
                          <Col xs={12} md={3} className="mb-4 mb-md-0" style={{paddingBottom: '30px'}}>
                              <FaArrowUp className="d-md-none" style={{ fontSize: '14px', color: '#171717', marginBottom: '8px' }} />
                              <FaArrowUp className="d-none d-md-block" style={{ fontSize: '16px', color: '#171717', marginBottom: '8px' }} />
                              <h5 className="d-md-none" style={{ fontSize:"20px", color: "#171717" }}>
                                  HRMS<br />
                                  <span className="fw-normal" style={{ fontSize: '13px', color: '#171717', opacity: "60%" }}>                                   
                                     Attendance, payroll & evaluation
                                  </span>
                              </h5>
                              <h5 className="d-none d-md-block" style={{ fontSize:"24px", color: "#171717" }}>
                                  HRMS<br />
                                  <span className="fw-normal" style={{ fontSize: '14px', color: '#171717', opacity: "60%" }}>                                   
                                     Attendance, payroll & evaluation
                                  </span>
                              </h5>
                          </Col>
                          <Col xs={12} md={3} style={{paddingBottom: '30px'}}>   
                              <FaArrowUp className="d-md-none" style={{ fontSize: '14px', color: '#171717', marginBottom: '8px' }} />
                              <FaArrowUp className="d-none d-md-block" style={{ fontSize: '16px', color: '#171717', marginBottom: '8px' }} />
                              <h5 className="d-md-none" style={{ fontSize:"20px", color: "#171717" }}>
                             Item Search  <br />
                                  <span className="fw-normal" style={{ fontSize: '13px', color: '#171717', opacity: "60%" }}>                                   
                                      Consistency, quality, and delight at every touchpoint.                                                                    
                                  </span>
                              </h5>
                              <h5 className="d-none d-md-block" style={{ fontSize:"24px", color: "#171717" }}>
                             Item Search  <br />
                                  <span className="fw-normal" style={{ fontSize: '14px', color: '#171717', opacity: "60%" }}>                                   
                                      Consistency, quality, and delight at every touchpoint.                                                                    
                                  </span>
                              </h5>
                          </Col>
                          <Col xs={12} md={3} style={{paddingBottom: '30px'}}>   
                              <FaArrowUp className="d-md-none" style={{ fontSize: '14px', color: '#171717', marginBottom: '8px' }} />
                              <FaArrowUp className="d-none d-md-block" style={{ fontSize: '16px', color: '#171717', marginBottom: '8px' }} />
                              <h5 className="d-md-none" style={{ fontSize:"20px", color: "#171717" }}>
            AI Business Analyst <br />
                                  <span className="fw-normal" style={{ fontSize: '13px', color: '#171717', opacity: "60%" }}>                                   
                                     Consistency, quality, and delight at every touchpoint.                                                                     
                                  </span>
                              </h5>
                              <h5 className="d-none d-md-block" style={{ fontSize:"24px", color: "#171717" }}>
            AI Business Analyst <br />
                                  <span className="fw-normal" style={{ fontSize: '14px', color: '#171717', opacity: "60%" }}>                                   
                                     Consistency, quality, and delight at every touchpoint.                                                                     
                                  </span>
                              </h5>
                          </Col>
                          <Col xs={12} md={3} style={{paddingBottom: '30px'}}>   
                              <FaArrowUp className="d-md-none" style={{ fontSize: '14px', color: '#171717', marginBottom: '8px' }} />
                              <FaArrowUp className="d-none d-md-block" style={{ fontSize: '16px', color: '#171717', marginBottom: '8px' }} />
                              <h5 className="d-md-none" style={{ fontSize:"20px", color: "#171717" }}>
                             Store Insights
                               <br />
                                  <span className="fw-normal" style={{ fontSize: '13px', color: '#171717', opacity: "60%" }}>                                   
                                      Stores Across Kerala
                                  </span>
                              </h5>
                              <h5 className="d-none d-md-block" style={{ fontSize:"24px", color: "#171717" }}>
                             Store Insights
                               <br />
                                  <span className="fw-normal" style={{ fontSize: '14px', color: '#171717', opacity: "60%" }}>                                   
                                      Stores Across Kerala
                                  </span>
                              </h5>
                          </Col>
                      </Row>



                  </div>

    
                    </Container>
    </>
  )
}

export default TechnologyPage
